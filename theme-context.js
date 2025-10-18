// theme-context.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { useColorScheme } from "nativewind";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const { setColorScheme } = useColorScheme(); // 👈 controls NativeWind mode

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setColorScheme(newTheme); // 👈 tells NativeWind to switch mode
  };

  useEffect(() => {
    setColorScheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
