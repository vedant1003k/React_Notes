import { useState } from "react";

const useCounter = (initialCount = 0,value) => {
  const [count, setCount] = useState(initialCount);

  const incerement = () => {
    // setCount(count + 1);
    setCount(prevCount => prevCount + value);
    
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(initialCount);
  };

  return [count, incerement, decrement, reset];
};

export default useCounter;
