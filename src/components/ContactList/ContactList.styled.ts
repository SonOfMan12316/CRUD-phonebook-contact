import styled from "styled-components"
import { IoIosContact } from "react-icons/io"
import { MdDeleteOutline } from "react-icons/md"

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  max-height: 19.7rem;
  overflow: scroll;
`

export const Item = styled.li`
  color: ${p => p.theme.colors.textColor};
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.28;
`
export const List = styled.li`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.4rem;
  border-radius: 0.2rem;

  &:nth-child(even) {
    background-color: ${p => p.theme.colors.itemsEven};
  }
  &:nth-child(odd) {
    background-color: ${p => p.theme.colors.itemsOdd};
  }
`

export const P = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.colors.textColor};
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28;
`

export const ContactIcon = styled(IoIosContact)`
  margin-right: 8px;
  width: 24px;
  height: 24px;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background: transparent;
  padding: 4px 4px;
  border-radius: 24px;
  cursor: pointer;

  transition: 0.3s;
`

export const ContactDelete = styled(MdDeleteOutline)`
  width: 24px;
  height: 24px;
  transition: 0.3s;

  color: ${p => p.theme.colors.deleteBtn};
  &:hover {
    color: #fe4f4f;
  }
`
