import React from 'react';
const contextState = {
  count: 5,
};
export const CountContext = React.createContext(contextState.count);
