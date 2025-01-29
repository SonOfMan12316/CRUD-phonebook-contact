import React, { useState } from "react"
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal"
import {
  Button,
  List,
  P,
  ContactIcon,
  ContactDelete,
} from "./ContactList.styled"

interface ContactItemProps {
  contact: string
  id: number
  phoneNumber: number
}

const ContactItem: React.FC<ContactItemProps> = ({
  contact,
  id,
  phoneNumber,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDelete = () => {
    setIsModalOpen(true)
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
      <Button>
        <ContactDelete />
      </Button>
      <DeleteConfirmationModal isOpen={isModalOpen}></DeleteConfirmationModal>
    </List>
  )
}

export default ContactItem
