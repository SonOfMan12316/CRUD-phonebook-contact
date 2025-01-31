import {
  IconClickLight,
  IconClickDark,
  SwitcherTheme,
} from "./ThemeButton.styled"

interface ThemeButtonProp {
  toggleTheme: () => void
  isDarkTheme: Boolean
}
const ThemeButton: React.FC<ThemeButtonProp> = ({
  toggleTheme,
  isDarkTheme,
}) => {
  const handleThemeToggle = () => {
    toggleTheme()
  }

  return (
    <SwitcherTheme onClick={handleThemeToggle}>
      {isDarkTheme ? <IconClickDark /> : <IconClickLight />}
    </SwitcherTheme>
  )
}

export default ThemeButton
