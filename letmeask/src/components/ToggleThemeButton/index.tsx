import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../hooks/useTheme";
import { ToggleContainer } from "./styles";

export function ToggleThemeButton() {
  const { toggleTheme, isLight } = useTheme();

  return (
    <ToggleContainer onClick={toggleTheme} isLight={isLight}>
      <FiSun />
      {isLight ? "" : "Dark"}
      {isLight ? "Light" : ""}
      <FiMoon />
    </ToggleContainer>
  );
}