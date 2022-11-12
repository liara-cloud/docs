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
        {theme === "dark" && <div className="background-gradient-first"></div>}
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
