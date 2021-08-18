import React from "react";
import ButtonSwitchLayout from "../Layout/ButtonSwitchLayout";

const ThemeSelector = ({ onChangeTheme }) => {
  return (
    <ButtonSwitchLayout>
      <button onClick={onChangeTheme("theme-one")}>Theme 1</button>
      <button onClick={onChangeTheme("theme-two")}>Theme 2</button>
    </ButtonSwitchLayout>
  );
};
export default ThemeSelector;
