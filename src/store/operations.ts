import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Contact } from "./contactSlice"

interface ErrorPayload {
  message: string
}

const URL = import.meta.env.VITE_API_KEY

export const getContact = createAsyncThunk<
  Contact[],
  void,
  { rejectValue: ErrorPayload }
>("contacts/getContact", async (_, thunkAPI) => {
  try {
    const response = await axios.get<Contact[]>(`${URL}/contacts`)
    return response.data
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return thunkAPI.rejectWithValue({
        message: err.message,
      })
    } else {
      return thunkAPI.rejectWithValue({
        message: "An unknown error occurred",
      })
    }
  }
})

export const addContact = createAsyncThunk<
  Contact,
  Contact,
  { rejectValue: ErrorPayload }
>("contacts/addContact", async (contact: Contact, thunkAPI) => {
  try {
    const response = await axios.post<Contact>(`${URL}/contacts`, contact)
    return response.data
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return thunkAPI.rejectWithValue({
        message: e.message,
      })
    } else {
      return thunkAPI.rejectWithValue({
        message: "An unknown error occurred",
      })
    }
  }
})

export const deleteContact = createAsyncThunk<
  string,
  string,
  { rejectValue: ErrorPayload }
>("contacts/deleteContact", async (contactId: string, thunkAPI) => {
  try {
    const response = await axios.delete(`${URL}/contacts/${contactId}`)
    return response.data
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return thunkAPI.rejectWithValue({
        message: e.message,
      })
    } else {
      return thunkAPI.rejectWithValue({
        message: "An unknown error occurred",
      })
    }
  }
})
