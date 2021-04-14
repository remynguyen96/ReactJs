import React, { useState, useEffect, useRef } from 'react';

import './Count.css';

// const getStateFromLocalStorage = () => {
//   const storage = localStorage.getItem('counterState');
//   console.log(storage);
//   if (storage) return JSON.parse(storage).count;
//   return { count: 0 };
// };

// const storeStateInLocalStorage = count => {
//   localStorage.setItem('counterState', JSON.stringify({ count }));
//   console.log(localStorage);
// };
const useLocalStorage = (initialState, key) => {
  const get = () => {
    const storage = localStorage.getItem(key);
    if (storage) return JSON.parse(storage).value;
    return initialState;
  }

  const [value, setValue] = useState(get());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return [value, setValue];
}

const Count = ({ max, step }) => {
  const [count, setCount] = useLocalStorage(0, 'counter');
  const countRef = useRef(count);

  console.log(`Before: ${countRef.current}`, `After ${count}`);

  countRef.current = count;

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     console.log(count);
  //   }, 1500);
  //   return () => clearInterval(id);
  // }, [count]);

  const increment = () => setCount(c => {
    if (c >= max) return c;
    return c + step;
  });
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <section className="Counters">
      <main className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </section>
      </main>
    </section>
  );
};

export default Count;
