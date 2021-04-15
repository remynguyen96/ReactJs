import React, { memo, useContext } from 'react';

import { GrudgeContext } from './GrudesContext';

export const Grudge = memo(({ grudge }) => {
  const { toggleForgiveness: onForgive } = useContext(GrudgeContext);

  const forgive = () => onForgive(grudge.id);
  console.log('Rendering Grudge', grudge.id);

  return (
    <article className="Grudge">
      <h3>{grudge.person}</h3>
      <p>{grudge.reason}</p>
      <div className="Grudge-controls">
        <label className="Grudge-forgiven">
          <input type="checkbox" checked={grudge.forgiven} onChange={forgive} /> Forgiven
        </label>
      </div>
    </article>
  );
});
