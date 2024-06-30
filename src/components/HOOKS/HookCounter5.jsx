import React, { useEffect, useState } from "react";

const HookCounter5 = () => {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");

  useEffect(() => {
    console.log('Updating HookCounter');
    document.title = `you Clicked ${count}`;
  },[count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Clicked {count}</button>
    </div>
  );
};

export default HookCounter5;
