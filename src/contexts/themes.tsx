import React, { useContext, createContext, useState, useEffect } from "react";

// theme interface
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

//creating initial context
const themeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

//custom hook
export function useTheme() {
  return useContext(themeContext);
}

//context provider
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}
