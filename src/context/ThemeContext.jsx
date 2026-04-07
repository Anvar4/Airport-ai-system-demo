import { createContext, useContext, useEffect } from 'react'

const ThemeContext = createContext()

// Dark mode is ALWAYS on — no toggle needed
export function ThemeProvider({ children }) {
  useEffect(() => {
    document.documentElement.classList.add('dark')
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  }, [])

  return (
    <ThemeContext.Provider value={{ isDark: true, toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
