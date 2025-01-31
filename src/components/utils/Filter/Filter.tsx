import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../../../store/contactSlice"
import { selectFiltersContacts } from "../../../store/selectors"
import {
  FilterDiv,
  FilterInput,
  FilterLabel,
  FilterSearchIcon,
} from "./Filter.styled"

const Filter = () => {
  const dispatch = useDispatch()
  const filteredContacts = useSelector(selectFiltersContacts)
  const changeFilter = (value: string) => {
    const searchContact = value.toLowerCase()
    dispatch(setFilter(searchContact))
  }

  return (
    <FilterDiv>
      <FilterLabel htmlFor="search">
        Find contacts by name:
        <FilterInput
          type="text"
          name="search"
          placeholder="Search"
          value={filteredContacts}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            changeFilter(e.target.value)
          }}
        />
        <FilterSearchIcon />
      </FilterLabel>
    </FilterDiv>
  )
}

export default Filter
