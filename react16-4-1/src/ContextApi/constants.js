import { createContext } from 'react';

export const themes = {
  light: {
    foreground: '#8F8F8F',
    background: '#62FFAC',
  },
  dark: {
    foreground: '#62FFAC',
    background: '#8F8F8F',
  },
};

export const ButtonContext = createContext({
  themes: themes.dark,
  toggleTheme: () => {},
});
