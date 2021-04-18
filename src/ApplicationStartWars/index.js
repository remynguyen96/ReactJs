import React, { useReducer, useCallback } from 'react';
import { Route } from 'react-router-dom';
import { isFunction } from 'lodash';

import { CharacterList } from './CharacterList';
import { CharacterView } from './CharacterView';
import endpoint from './endpoint';

import './style.scss';

const LOADING = 'LOADING';
const FETCH_API_SUCCESS = 'FETCH_API_SUCCESS';
const FETCH_API_ERROR = 'FETCH_API_ERROR';
const initialState = {
  response: null,
  error: null,
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        loading: true,
        response: null,
        error: null,
      };
    case FETCH_API_SUCCESS:
      return {
        response: action.payload.response,
        loading: false,
        error: null,
      };
    case FETCH_API_ERROR:
      return {
        error: action.payload.error,
        response: null,
        loading: false,
      };
    default:
      return state;
  }
};

const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const enhanceReducer = useCallback(
    (action) => {
      console.log(action, 'action');
      isFunction(action) ? action(dispatch) : dispatch(action);
    },
    [dispatch],
  );

  return [state, enhanceReducer];
};

const fetchCharacters = (dispatch) => {
  dispatch({ type: LOADING });
  fetch(`${endpoint}/characters`)
    .then((response) => response.json())
    .then((response) => dispatch({ type: FETCH_API_SUCCESS, payload: { response } }))
    .catch((error) => dispatch({ type: FETCH_API_ERROR, payload: { error } }));
};

const ApplicationStartWars = () => {
  const [state, dispatch] = useThunkReducer(reducer, initialState);
  const { error, loading, response } = state;
  const characters = (response && response.characters) || [];
  const onClick = () => dispatch(fetchCharacters);

  return (
    <div className="Application">
      <header>
        <h1>Star Wars Characters</h1>
      </header>
      <main>
        <section className="sidebar">
          <button onClick={onClick}>Fetch Characters</button>
          {loading ? <p>Loading ...</p> : <CharacterList characters={characters} />}
          {error && <p className="error">{error.message}</p>}
        </section>
        <section className="character-view">
          <Route path="/characters/:id" component={CharacterView} />
        </section>
      </main>
    </div>
  );
};

export default ApplicationStartWars;
