import React, { useState } from "react";

export const ThemeContext = React.createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <div className={theme === "dark" ? "dark-mode" : ""}>
        {
          <div
            className="background-gradient-first"
            style={{ visibility: theme !== "dark" ? "hidden" : "visible" }}
          ></div>
        }
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
