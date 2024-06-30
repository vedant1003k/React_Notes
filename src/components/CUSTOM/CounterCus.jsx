import React, { useState } from "react";
import useCounter from "../../HOOKs/useCounter";

const CounterCus = () => {
  const [count, increment, decrement, reset] = useCounter(0,10);

  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterCus;
