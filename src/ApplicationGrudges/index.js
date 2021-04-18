import React, { useContext } from 'react';

import { GrudgeContext } from './GrudesContext';
import { NewGrudge } from './NewGrudge';
import { Grudges } from './Grudges';
import './style.scss';

export default function ApplicationGrudges() {
  const { undo, redo, isPast, isFuture } = useContext(GrudgeContext)

  return (
    <div className="Application">
      <NewGrudge />
      <button className="full-width" disabled={!isPast} onClick={undo}>Undo</button>
      <button className="full-width" disabled={!isFuture} onClick={redo}>Redo</button>
      <Grudges />
    </div>
  );
}
