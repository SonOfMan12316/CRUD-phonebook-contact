import { useState } from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import { nanoid } from "nanoid"
import { toast } from "react-toastify"
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

const Form = () => {
  const [name, setName] = useState<String>("")
  const [phone, setPhone] = useState<String>("")

  const formSchema = Yup.object({
    name: Yup.string()
      .min(1, "Too Short Name!")
      .max(50, "Too Long Name!")
      .required("Please write a name!"),
    phone: Yup.string()
      .min(9, "Invalid Phone Number")
      .required("Please fill up the phone number!"),
  })

  return (
    <Formik
      initialValues={{
        name: name,
        phone: phone,
      }}
      validationSchema={formSchema}
      onSubmit={(values, actions) => {}}
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
