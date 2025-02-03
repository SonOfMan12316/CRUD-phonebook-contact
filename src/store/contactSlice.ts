import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {  getContact, addContact, deleteContact } from "./operations"

export interface Contact {
  id?: string
  name: string
  phone: string
}

interface ContactState {
  items: Contact[]
  isLoading: boolean
  error: string | null
}

export interface AppState {
  contacts: ContactState
  filter: string
}

const initialState: AppState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: "",
}

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContact.pending, (state) => {
        state.contacts.isLoading = true
      })
      .addCase(getContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(getContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload ? action.payload.message : 'An error occured'
      })
      .addCase(addContact.pending, (state) => {
        state.contacts.isLoading = true
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload)
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload ? action.payload.message : 'An error occured'
      })
      .addCase(deleteContact.pending, (state) => {
        state.contacts.isLoading = true
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        const index = state.contacts.items.findIndex(
          (contact) => contact.id === action.payload.id
        )
        state.contacts.items.splice(index, 1)
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload ? action.payload.message : 'An error occured'
      })
  },
})

export const contactsReducer = contactSlice.reducer
export const { setFilter } = contactSlice.actions
