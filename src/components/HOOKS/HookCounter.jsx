import React, { useState } from "react";

const HookCounter = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  //array destructuring
  const increament5 = () => {
    setCount((prevCount) => prevCount + 5);
  };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count {count}</button>
    </div>
  );
};

export default HookCounter;
