import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Menu, Item } from "./ContactList.styled"
import Loader from "../utils/Loader/Loader"
import ContactItem from "./ContactItem"
import {
  selectContacts,
  selectIsLoading,
  selectFiltersContacts,
} from "../../store/selectors"
import { getContact } from "../../store/operations"
import { AppDispatch } from "../../store/store"

const ContactList = () => {
  const dispatch = useDispatch<AppDispatch>()
  const contacts = useSelector(selectContacts)
  const isLoading = useSelector(selectIsLoading)
  const filteredContacts = useSelector(selectFiltersContacts)

  useEffect(() => {
    dispatch(getContact())
      .unwrap()
      .catch(error => {
        console.error("Error fetching contacts: ", error)
      })
  }, [])

  const filteredByContact = () => {
    const filter = filteredContacts.toLowerCase()
    const validContacts = contacts.filter(
      contact => contact.id && contact.name && contact.phone,
    )
    const filtered = validContacts.filter(item =>
      item.name.toLowerCase().includes(filter),
    )
    return filtered
  }

  const visibleContacts = filteredByContact()

  return (
    <Menu>
      {isLoading ? (
        <Loader />
      ) : visibleContacts.length === 0 && filteredContacts.length > 0 ? (
        <Item className="contact-list">No matching contacts found</Item>
      ) : visibleContacts.length > 0 ? (
        visibleContacts
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ name, phone, id }) => (
            <ContactItem key={id} id={id!} contact={name} phoneNumber={phone} />
          ))
      ) : contacts.length !== 0 ? (
        visibleContacts
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ name, phone, id }) => (
            <ContactItem key={id} id={id!} contact={name} phoneNumber={phone} />
          ))
      ) : (
        ""
      )}
    </Menu>
  )
}

export default ContactList
