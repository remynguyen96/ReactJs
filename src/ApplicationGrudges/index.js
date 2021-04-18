import React from 'react';

import { NewGrudge } from './NewGrudge';
import { Grudges } from './Grudges';
import './style.scss';

export default function ApplicationGrudges() {
  return (
    <div className="Application">
      <NewGrudge />
      <Grudges />
    </div>
  );
}
