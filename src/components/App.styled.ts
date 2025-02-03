import styled from "styled-components"
import { TbCaretUp, TbCaretDown } from "react-icons/tb"

interface AppWrapperProp {
  open: Boolean
}

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 800px;
  min-height: 660px;
  background-color: ${p => p.theme.colors.containerColor};
  box-shadow:
    15px 15px 50px 40px ${p => p.theme.colors.boxShadow},
    -15px -15px 50px 40px ${p => p.theme.colors.boxShadow};

  margin: 0 auto;
  border-radius: 12px;
  position: relative;
`

export const AppWrapper = styled.div<AppWrapperProp>`
  width: 340px;
  padding: ${open => (open ? "20px" : "0")};
  background-color: ${p => p.theme.colors.mainBgColor};
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const AppButton = styled.button`
  position: absolute;
  top: 16px;
  right: 24px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 40px;
  color: inherit;
  z-index: 10;
`

export const AppButtonOpen = styled(TbCaretDown)`
  color: ${p => p.theme.colors.textColor};
  transition: 0.3s;
  font-size: 32px;

  &:hover {
    color: #2982ff;
  }
`

export const AppButtonClose = styled(TbCaretUp)`
  color: ${p => p.theme.colors.textColor};
  transition: 0.3s;
  font-size: 32px;

  &:hover {
    color: #2982ff;
  }
`
export const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;
  width: 300px;
`

export const AppTitleH1 = styled.h1`
  color: ${p => p.theme.colors.textColor};
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 120%;
  text-transform: capitalize;
`
export const AppTitleH2 = styled.h1`
  color: ${p => p.theme.colors.textColor};
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 120%;
  text-transform: capitalize;
`

export const AppContactsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  width: 300px;
`
