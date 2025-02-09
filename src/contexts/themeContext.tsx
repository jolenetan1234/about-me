"use client";

import { createContext, ReactNode, useContext, useState } from "react";

// Define context
const themeContext = createContext<{
  theme: "light" | "dark";
  toggleTheme: () => void;
  loadTheme: () => void;
}>({
  theme: "dark",
  toggleTheme: () => {},
  loadTheme: () => {},
});

// Context provider
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const loadTheme = () => {
    // Check for stored theme in localStorage on initial load
    const savedTheme = localStorage.getItem("theme") ?? "dark";
    setTheme(savedTheme as "light" | "dark");
  };

  return (
    <themeContext.Provider
      value={{
        theme,
        toggleTheme,
        loadTheme,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};

// Hook to access context
const useTheme = () => useContext(themeContext);

export { ThemeProvider, useTheme };
