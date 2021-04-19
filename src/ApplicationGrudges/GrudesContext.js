import React, { useReducer, useCallback, createContext } from 'react';
import { v4 as id } from 'uuid';

import { initialState } from './initialState';

const GRUDGE_ADD = 'GRUDGE_ADD';
const GRUDGE_FORGIVE = 'GRUDGE_FORGIVE';
const UNDO = 'UNDO';
const REDO = 'REDO';

const useUndoReducer = (reducer, initialState) => {
  const undoState = {
    past: [],
    present: initialState,
    future: [],
  };

  const undoReducer = (state, action) => {
    const newPresent = reducer(state.present, action);

    if (action.type === UNDO) {
      const [newPresent, ...newPast] = state.past;

      return {
        past: newPast,
        present: newPresent,
        future: [state.present, ...state.future],
      };
    }

    if (action.type === REDO) {
      const [newPresent, ...newFuture] = state.future;

      return {
        past: [state.present, ...state.past],
        present: newPresent,
        future: newFuture,
      };
    }

    return {
      past: [state.present, ...state.past],
      present: newPresent,
      future: [],
    }
  };

  return useReducer(undoReducer, undoState);
};

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
  const [state, dispatch] = useUndoReducer(reducer, initialState);
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
