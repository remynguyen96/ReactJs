import React from 'react';
import { PropTypes } from 'prop-types';

export const ThemedButton = (props, context) => {
  const { bg, handleClick } = context;
  return (
    <button onClick={handleClick} style={{ backgroundColor: bg }}>
      Button Old Here
    </button>
  );
};

ThemedButton.contextTypes = {
  bg: PropTypes.string,
  handleClick: PropTypes.func,
};

