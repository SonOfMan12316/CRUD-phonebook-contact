import { useState, useEffect } from "react"
import { ToastContainer } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"

import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./components/GlobalStyle"
import {
  AppContainer,
  AppWrapper,
  AppButton,
  AppButtonOpen,
  AppButtonClose,
  AppDiv,
  AppTitleH1,
  AppTitleH2,
  AppContactsDiv,
} from "./components/App.styled"
import ThemeButton from "./components/ThemeButton/ThemeButton"
import Form from "./components/Form/Form"
import Filter from "./components/utils/Filter/Filter"
import ContactList from "./components/ContactList/ContactList"
import { selectContacts } from "./store/selectors"
import { getContact } from "./store/operations"
import { AppDispatch } from "./store/store"
import Loader from "./components/utils/Loader/Loader"
const theme = {
  light: {
    colors: {
      mainBgColor: "#e9ecef",
      textColor: "#050505",
      contactBtn: "#2982ff",
      deleteBtn: "#ff2929",
      bgWrapper: "#f8f9fa",
      containerColor: "#dee2e6",
      itemsEven: "#f8f9fa",
      itemsOdd: "#dee2e6",
      boxShadow: "rgba(255, 255, 255, 0.5)",
      switcherBg: "#ced4da",
      inputBg: "#f8f9fa",
      modalBg: "#6c757d",
    },
  },
  dark: {
    colors: {
      mainBgColor: "#1E1E1E",
      textColor: "#fffaff",
      contactBtn: "#2982ff",
      deleteBtn: "#ff2929",
      bgWrapper: "#0b0014",
      containerColor: "#050505",
      itemsEven: "#212529",
      itemsOdd: "#343a40",
      boxShadow: "none",
      switcherBg: "#1E1E1E",
      inputBg: "#050505",
      modalBg: "#1E1E1E",
    },
  },
}

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme")
    return savedTheme === "light" ? false : true
  })

  const dispatch = useDispatch<AppDispatch>()
  const contacts = useSelector(selectContacts)
  const [initialLoading, setInitialLoading] = useState<boolean>(false)

  const toggleTheme = () => {
    setIsDarkTheme(prevIsDarkTheme => !prevIsDarkTheme)
    localStorage.setItem("theme", isDarkTheme ? "light" : "dark")
  }

  useEffect(() => {
    try {
      dispatch(getContact())
        .unwrap()
        .catch((error: Error) => {
          console.log("Error fetching contacts:", error.message)
        })
        .finally(() => {
          setInitialLoading(false)
        })
    } catch (error) {
      if (error instanceof Error) {
        console.log("Synchronous error:", error)
      }
    }
  }, [dispatch])

  useEffect(() => {
    setIsOpen(contacts.length > 0)
  }, [contacts])

  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <GlobalStyle />
      {initialLoading ? (
        <Loader />
      ) : (
        <AppContainer>
          <ThemeButton toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          <AppWrapper open={isOpen}>
            <AppButton onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <AppButtonClose /> : <AppButtonOpen />}
            </AppButton>
            <AppDiv>
              {isOpen && (
                <>
                  <AppTitleH1>Phonebook</AppTitleH1>
                  <Form />
                  {contacts.length !== 0 && (
                    <AppContactsDiv>
                      <AppTitleH2>Contacts</AppTitleH2>
                      <Filter />
                      <ContactList />
                    </AppContactsDiv>
                  )}
                </>
              )}
            </AppDiv>
          </AppWrapper>
        </AppContainer>
      )}
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
