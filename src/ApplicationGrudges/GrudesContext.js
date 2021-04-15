import React, { useReducer, useCallback, createContext } from 'react';
import { v4 as id } from 'uuid';

import { initialState } from './initialState';

const GRUDGE_ADD = 'GRUDGE_ADD';
const GRUDGE_FORGIVE = 'GRUDGE_FORGIVE';
const reducer = (state, action) => {
  switch (action.type) {
    case GRUDGE_ADD:
      return [action.payload.grudge, ...state];
    case GRUDGE_FORGIVE:
      return state.map((grudge) => {
        if (action.payload.id === grudge.id) {
          return { ...grudge, forgiven: !grudge.forgiven };
        }

        return grudge;
      });
    default:
      return state;
  }
};

export const GrudgeContext = createContext();

export const GrudgesProvider = ({ children }) => {
  const [grudges, dispatch] = useReducer(reducer, initialState);
  const addGrudge = useCallback(
    (grudge) => {
      grudge.id = id();
      grudge.forgiven = false;

      dispatch({ type: GRUDGE_ADD, payload: { grudge } });
    },
    [dispatch],
  );
  const toggleForgiveness = useCallback(
    (id) => {
      dispatch({ type: GRUDGE_FORGIVE, payload: { id } });
    },
    [dispatch],
  );
  const value = { toggleForgiveness, addGrudge, grudges };

  return <GrudgeContext.Provider value={value}>{children}</GrudgeContext.Provider>;
};