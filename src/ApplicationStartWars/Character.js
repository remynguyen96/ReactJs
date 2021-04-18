import React from 'react';
import Link from 'react-router-dom';

export const Character = ({ id, name }) => (
  <article className="Character">
    <Link to={`/characters/${id}`}>{name}</Link>
  </article>
);
