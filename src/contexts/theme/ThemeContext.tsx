import { createContext, type ReactNode, useMemo, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    let currentTheme: Theme = 'light'; // Default theme

    // Check for saved theme in localStorage or default to 'light'
    const savedTheme = localStorage.getItem('theme');

    // if (savedTheme) return savedTheme as Theme;
    if (savedTheme) {
      currentTheme = savedTheme as Theme;
    } else {
      // If no saved theme, check the user's system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      // If the user prefers dark mode, set the theme to dark
      if (prefersDark) {
        localStorage.setItem('theme', 'dark');
        // return 'dark';
        currentTheme = 'dark';
      }
    }

    // change the html's data-theme attribute
    document.documentElement.setAttribute(
      'data-theme',
      currentTheme === 'dark' ? 'green-haze-dark' : 'green-haze'
    );

    return currentTheme;

    // return savedTheme === 'dark' ? 'dark' : 'light';
  });

  // const toggleTheme = () => {
  //
  // };

  const value = useMemo(
    () => ({
      theme,
      // toggleTheme,
      toggleTheme() {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

        // Update the localStorage with the new theme
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');

        // Update the html's data-theme attribute
        document.documentElement.setAttribute(
          'data-theme',
          theme === 'light' ? 'green-haze-dark' : 'green-haze'
        );
      }
    }),
    [theme]
  );

  return <ThemeContext value={value}>{children}</ThemeContext>;
};

export default ThemeContext;
