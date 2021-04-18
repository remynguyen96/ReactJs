import React, { useReducer, useCallback, createContext } from 'react';
import { v4 as id } from 'uuid';

import { initialState } from './initialState';

const GRUDGE_ADD = 'GRUDGE_ADD';
const GRUDGE_FORGIVE = 'GRUDGE_FORGIVE';
const UNDO = 'UNDO';
const REDO = 'REDO';

const defaultState = {
  past: [],
  present: initialState,
  future: [],
};

const reducer = (state, action) => {
  let newPresent;

  switch (action.type) {
    case GRUDGE_ADD:
      newPresent = [action.payload.grudge, ...state.present];

      return {
        past: [...state.present],
        present: newPresent,
        future: []
      };
    case GRUDGE_FORGIVE:
      newPresent = state.present.map((grudge) => {
        if (action.payload.id === grudge.id) {
          return { ...grudge, forgiven: !grudge.forgiven };
        }
        return grudge;
      });

      return {
        past: [...state.present],
        present: newPresent,
        future: []
      };
    case UNDO:
      return {
        past: [],
        present: [...state.past],
        future: [...state.present]
      };
    case REDO:
      return {
        past: [...state.present],
        present: [...state.future],
        future: []
      };
    default:
      return state;
  }
};

export const GrudgeContext = createContext();

export const GrudgesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const grudges = state.present;

  const isPast = !!state.past.length;
  const isFuture = !!state.future.length;

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

  const undo = useCallback(() => {
    dispatch({ type: UNDO });
  }, [dispatch]);

  const redo = useCallback(() => {
    dispatch({ type: REDO });
  }, [dispatch]);

  const value = { toggleForgiveness, addGrudge, grudges, undo, redo, isPast, isFuture };

  return <GrudgeContext.Provider value={value}>{children}</GrudgeContext.Provider>;
};
