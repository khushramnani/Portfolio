import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type ThemeContextType = {
  isDarkBackground: boolean;
  setIsDarkBackground: (isDark: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkBackground, setIsDarkBackground }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
