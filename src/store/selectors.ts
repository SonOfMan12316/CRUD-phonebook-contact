import { AppState } from "./contactSlice"

interface RootState {
  contacts: AppState
}

export const selectContacts = (state: RootState) =>
  state.contacts.contacts.items

export const selectFiltersContacts = (state: RootState) => state.contacts.filter

export const selectIsLoading = (state: RootState) =>
  state.contacts.contacts.isLoading

export const selectError = (state: RootState) => state.contacts.contacts.error
