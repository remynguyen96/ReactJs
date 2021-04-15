import React, { memo } from 'react';

export const Grudge = memo(({ grudge, onForgive }) => {
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
