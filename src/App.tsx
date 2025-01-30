import { useState } from "react"
import { ToastContainer } from "react-toastify"
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
  const [isOpen, setIsOpen] = useState<Boolean>(false)
  const [isDarkTheme, setIsDarkTheme] = useState<Boolean>(() => {
    const savedTheme = localStorage.getItem("theme")
    return savedTheme === "light" ? false : true
  })

  const toggleTheme = () => {
    setIsDarkTheme(prevIsDarkTheme => !prevIsDarkTheme)
    localStorage.setItem("theme", isDarkTheme ? "light" : "dark")
  }
  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <GlobalStyle />
      <AppContainer>
        <ThemeButton toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <AppWrapper open={isOpen}>
          <AppButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <AppButtonClose /> : <AppButtonOpen />}
          </AppButton>
          <AppDiv>
            <>
              <AppTitleH1>Phonebook</AppTitleH1>
              <Form />
              <AppContactsDiv>
                <AppTitleH2>Contacts</AppTitleH2>
                <Filter />
                <ContactList />
              </AppContactsDiv>
            </>
          </AppDiv>
        </AppWrapper>
      </AppContainer>
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
