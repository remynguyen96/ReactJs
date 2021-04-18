import React, { useEffect, useReducer } from 'react';
import { CharacterList } from './CharacterList';
import endpoint from './endpoint';

import './style.scss';

const LOADING = 'LOADING';
const FETCH_API_SUCCESS = 'FETCH_API_SUCCESS';
const FETCH_API_ERROR = 'FETCH_API_ERROR';
const initialState = {
  response: null,
  error: null,
  loading: true,
};

const fetchReducer = (state, action) => {
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

const useFetch = (apiEndpoint) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    dispatch({ type: LOADING });

    (async () => {
      try {
        let response = await fetch(apiEndpoint);
        response = await response.json();

        dispatch({ type: FETCH_API_SUCCESS, payload: { response } });
      } catch (error) {
        dispatch({ type: FETCH_API_ERROR, payload: { error } });
      }
    })();
  }, [apiEndpoint]);

  return state;
};

const ApplicationStartWars = () => {
  const state = useFetch(`${endpoint}/characters`);
  const { error, loading, response } = state;
  const characters = (response && response.characters) || [];

  return (
    <div className="Application">
      <header>
        <h1>Star Wars Characters</h1>
      </header>
      <main>
        <section className="sidebar">
          {loading ? <p>Loading ...</p> : <CharacterList characters={characters} />}
          {error && <p className="error">{error.message}</p>}
        </section>
      </main>
    </div>
  );
};

export default ApplicationStartWars;
