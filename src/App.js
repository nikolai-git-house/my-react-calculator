import { useState } from "react";
import Calculator from "./components/Calculator";
import ThemeSelector from "./components/ThemeSelector";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("theme-one");
  const handleChangeTheme = (themeName) => () => {
    setTheme(themeName);
  };
  return (
    <div className="App">
      <Calculator classname={theme} />
      <ThemeSelector onChangeTheme={handleChangeTheme} />
    </div>
  );
}

export default App;
