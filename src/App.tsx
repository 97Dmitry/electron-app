import * as React from "react";
import { hot } from "react-hot-loader/root";
import { VersionData } from "@src/pages";

import Global from "@src/assets/styles/globalStyles";

const App: React.FC = () => {
  const toggleTheme = async () => {
    // @ts-ignore
    const isDarkMode = await window?.darkMode.toggle();
    // @ts-ignore
    document.getElementById("theme-source").innerHTML = isDarkMode
      ? "Dark"
      : "Light";
  };

  const resetThemeToSystemDefault = async () => {
    // @ts-ignore
    await window.darkMode.system();
    // @ts-ignore
    document.getElementById("theme-source").innerHTML = "System";
  };

  return (
    <>
      <Global />
      <h1>Hello Electron</h1>
      <VersionData />
      <button id="toggle-dark-mode" onClick={toggleTheme}>
        Toggle Dark Mode
      </button>
      <button id="reset-to-system" onClick={resetThemeToSystemDefault}>
        Reset to System Theme
      </button>
      <p>
        Current theme source: <strong id="theme-source">System</strong>
      </p>
    </>
  );
};

export default hot(App);
