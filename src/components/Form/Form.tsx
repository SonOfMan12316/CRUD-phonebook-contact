import { useState } from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import { nanoid } from "nanoid"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import {
  FormContactBtn,
  FormLabel,
  FormStyled,
  FormField,
  FormError,
  FormHiUser,
  FormHiPhone,
  FormInputWrapper,
} from "./Form.styled"
import { addContact } from "../../store/operations"
import { selectContacts } from "../../store/selectors"
import { Contact } from "../../store/contactSlice"
import { AppDispatch } from "../../store/store"

const Form = () => {
  const [name, setName] = useState<string>("")
  const [phone, setPhone] = useState<string>("")

  const dispatch = useDispatch<AppDispatch>()
  const contacts = useSelector(selectContacts)

  const formSchema = Yup.object({
    name: Yup.string()
      .min(1, "Too Short Name!")
      .max(50, "Too Long Name!")
      .required("Please write a name!"),
    phone: Yup.string()
      .min(9, "Invalid Phone Number")
      .required("Please fill up the phone number!"),
  })

  const handleSubmit = (values: Contact) => {
    const newContact = { ...values, id: nanoid() }

    if (!newContact.name || !newContact.phone) {
      return
    }

    const contactExist = contacts.some(item => item.name === newContact.name)

    console.log(contactExist)

    if (contactExist) {
      toast.info(`${newContact.name} is already in contacts.`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      })
    } else {
      toast.success(`${newContact.name} added to your contacts.`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      })
      dispatch(addContact(newContact))
    }

    setName("")
    setPhone("")
  }

  return (
    <Formik
      initialValues={{
        name: name,
        phone: phone,
      }}
      validationSchema={formSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values)
        actions.resetForm({
          values: {
            name: name,
            phone: phone,
          },
        })
      }}
    >
      <FormStyled className="contact-form">
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInputWrapper>
          <FormHiUser />
          <FormField type="text" name="name" placeholder="John Doe" />
        </FormInputWrapper>

        <FormError component="span" name="name" />

        <FormLabel htmlFor="phone">Number</FormLabel>

        <FormInputWrapper>
          <FormHiPhone />
          <FormField type="number" name="phone" placeholder="123 45 6789" />
        </FormInputWrapper>

        <FormError component="span" name="phone" />

        <FormContactBtn type="submit">Add contact</FormContactBtn>
      </FormStyled>
    </Formik>
  )
}

export default Form
