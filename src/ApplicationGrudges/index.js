import React, { useState } from 'react';
import { v4 as id } from 'uuid';

import { NewGrudge } from './NewGrudge';
import { Grudges } from './Grudges';
import { initialState } from './initialState';
import './style.css';

export default function ApplicationGrudges() {
  const [grudges, setGrudges] = useState(initialState);

  const addGrudge = (grudge) => {
    grudge.id = id();
    grudge.forgiven = false;

    setGrudges([grudge, ...grudges]);
  };

  const toggleForgiveness = (id) => {
    setGrudges(grudges.map(grudge => {
      if (id === grudge.id) return { ...grudge, forgiven: !grudge.forgiven };

      return grudge;
    }))
  };

  return (
    <div className="Application">
      <NewGrudge onSubmit={addGrudge} />
      <Grudges grudges={grudges} onForgive={toggleForgiveness} />
    </div>
  );
}
