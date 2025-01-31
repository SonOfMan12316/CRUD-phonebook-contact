import React, { useState } from "react"
import { useDispatch } from "react-redux"
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal"
import {
  Button,
  List,
  P,
  ContactIcon,
  ContactDelete,
} from "./ContactList.styled"
import { deleteContact } from "../../store/operations"
import { AppDispatch } from "../../store/store"

interface ContactItemProps {
  contact: string
  id: string
  phoneNumber: string
}

const ContactItem: React.FC<ContactItemProps> = ({
  contact,
  id,
  phoneNumber,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch<AppDispatch>()

  const handleDelete = () => {
    setIsModalOpen(true)
  }

  const handleConfirmDelete = (id: string) => {
    dispatch(deleteContact(id))
    setIsModalOpen(false)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <List>
      <P>
        <ContactIcon />
        {contact}: {phoneNumber}
      </P>
      <Button onClick={handleDelete}>
        <ContactDelete />
      </Button>
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        onConfirm={() => handleConfirmDelete(id)}
      />
    </List>
  )
}

export default ContactItem
