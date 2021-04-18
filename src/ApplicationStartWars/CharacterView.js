import React, { useState, useEffect } from 'react';
import endpoint from './endpoint';

export const CharacterView = ({ match }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(endpoint + '/characters/' + match.params.id)
      .then(response => response.json())
      .then(response => setCharacter(response.character))
      .catch(console.error);
  }, [match.params.id]);

  return (
    <article className="CharacterView">
      <h2>{character.name}</h2>
      <ul>
        {Object.entries(character).map(([key, value]) => (
          <li key={key}>
            <strong>{key}</strong>: {value}
          </li>
        ))}
      </ul>
    </article>
  );
};