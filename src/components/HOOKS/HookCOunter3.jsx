import React, { useState } from "react";

const HookCOunter3 = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form action="">
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h2>First Name is {name.firstName}</h2>
        <h2>Last Name is {name.lastName}</h2>
        <button onClick={() => setName({ firstName: "", lastName: "" })}>
          Reset
        </button>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
};

export default HookCOunter3;
