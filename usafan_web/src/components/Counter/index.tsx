import React, { useState } from 'react';
import { hot } from 'react-hot-loader';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <button onClick={() => setCounter(counter + 1)}>
      Counter <span>{counter}</span>
    </button>
  );
};

export default hot(module)(Counter);
