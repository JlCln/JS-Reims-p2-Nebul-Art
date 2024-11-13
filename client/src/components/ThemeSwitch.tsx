import { useTheme } from "./ThemeContext";
import "./ThemeSwitch.css";

const ThemeSwitch = () => {
  const themeContext = useTheme();
  if (!themeContext) {
    return null;
  }
  const { theme, toggleTheme } = themeContext;

  return (
    <button className="theme-switch-button" type="button" onClick={toggleTheme}>
      <span className="material-symbols-outlined">
        {theme === "light" ? "dark_mode" : "light_mode"}
      </span>
    </button>
  );
};

export default ThemeSwitch;
