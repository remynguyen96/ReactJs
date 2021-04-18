import React from 'react';
import { NavLink } from 'react-router-dom';

export const CharacterListItem = ({ character }) => {
  const { id, name } = character;

  return (
    <article className="CharacterListItem">
      <NavLink className="CharacterListItemLink" to={`/characters/${id}`}>
        {name}
      </NavLink>
    </article>
  );
};
