import React, { useReducer, useCallback } from 'react';
import { v4 as id } from 'uuid';

import { NewGrudge } from './NewGrudge';
import { Grudges } from './Grudges';
import { initialState } from './initialState';
import './style.css';


const GRUDGE_ADD = 'GRUDGE_ADD';
const GRUDGE_FORGIVE = 'GRUDGE_FORGIVE';
const reducer = (state, action) => {
  switch(action.type) {
    case GRUDGE_ADD:
      return [action.payload.grudge, ...state];
    case GRUDGE_FORGIVE:
      return state.map((grudge) => {
        if (action.payload.id  === grudge.id) {
          return { ...grudge, forgiven: !grudge.forgiven }
        }

        return grudge;
      });
    default:
      return state;
  }
};

export default function ApplicationGrudges() {
  const [grudges, dispatch] = useReducer(reducer, initialState);

  const addGrudge = useCallback((grudge) => {
    grudge.id = id();
    grudge.forgiven = false;

    dispatch({ type: GRUDGE_ADD, payload: { grudge } });
    //setGrudges([grudge, ...grudges]);
  }, [dispatch]);

  const toggleForgiveness = useCallback((id) => {
    dispatch({ type: GRUDGE_FORGIVE, payload: { id } });
    //setGrudges(grudges.map(grudge => {
      //if (id === grudge.id) return { ...grudge, forgiven: !grudge.forgiven };

      //return grudge;
    //}))
  }, [dispatch]);

  return (
    <div className="Application">
      <NewGrudge onSubmit={addGrudge} />
      <Grudges grudges={grudges} onForgive={toggleForgiveness} />
    </div>
  );
}
