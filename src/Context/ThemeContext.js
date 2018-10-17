import { createContext } from 'react';

export const themes = {
  light: {
    color: '#6B6C76',
    background: '#7CFFC2',
  },
  dark: {
    foreground: '#ffffff',
    background: '#557060',
  },
};

export const { Provider, Consumer } = createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

export const UserContext = createContext({
  name: 'Guest'
});

