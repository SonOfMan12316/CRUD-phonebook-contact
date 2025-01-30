import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Contact {
  id?: number
  name: string
  phone: number
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
  extraReducers: builder => {},
})

export const contactsReducer = contactSlice.reducer
export const { setFilter } = contactSlice.actions
