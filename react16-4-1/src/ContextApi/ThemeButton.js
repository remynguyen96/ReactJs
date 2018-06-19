import React from 'react';
import { ButtonContext } from './constants';

export const ThemedButton = (props) => {
  return (
    <ButtonContext.Consumer>
      {({theme, toggleTheme}) => (
        <button
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
          Toggle Theme
        </button>
      )}
    </ButtonContext.Consumer>
  );
};
