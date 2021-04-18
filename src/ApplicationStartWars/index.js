import React, { useState, useEffect } from 'react';
import { CharacterList } from './CharacterList';
import endpoint from './endpoint';
// import { dummyData } from './dummy-data';

import './style.scss';

const useFetch = (apiEndpoint) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();

        setResponse(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, error, response };
};

const ApplicationStartWars = () => {
  const { error, loading, response } = useFetch(`${endpoint}/characters`);
  const characters = (response && response.characters) || [];

  return (
    <div className="Application">
      <header>
        <h1>Star Wars Characters</h1>
      </header>
      <main>
        <section className="sidebar">
          {loading ? <p>Loading ...</p> : <CharacterList characters={characters} />}
          {error && <p className="error">{error}</p>}
        </section>
      </main>
    </div>
  );
};

export default ApplicationStartWars;
