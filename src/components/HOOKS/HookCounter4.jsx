import React, { useState } from "react";

const HookCounter4 = () => {
  const [items, setItems] = useState([]);

  const addItems = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      <button onClick={addItems}>ADD a Number</button>
      <ul>
        {items.map((item, key) => (
          <li key={key}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default HookCounter4;
