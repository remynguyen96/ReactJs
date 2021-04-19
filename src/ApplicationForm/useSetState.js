import { useReducer } from 'react';

const reducer = (previousState = {}, updateState = {}) => {
  return { ...previousState, ...updateState };
}

export const useSetState = (initialState = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setState = updateState => dispatch(updateState);

  return [state, setState];
}