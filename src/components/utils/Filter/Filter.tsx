import {
  FilterDiv,
  FilterInput,
  FilterLabel,
  FilterSearchIcon,
} from "./Filter.styled"

const Filter = () => {
  return (
    <FilterDiv>
      <FilterLabel htmlFor="search">
        Find contacts by name:
        <FilterInput type="text" name="search" placeholder="Search" />
        <FilterSearchIcon />
      </FilterLabel>
    </FilterDiv>
  )
}

export default Filter
