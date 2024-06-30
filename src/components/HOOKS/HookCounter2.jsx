import React, { useState } from "react";

const HookCounter2 = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const increament5 = () => {
    setCount((prevCount) => prevCount + 5);
  };

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={increament5}>INcrement5</button>
    </div>
  );
};

export default HookCounter2;
