import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={()=> props.greethandle('child')}>Greet Parent</button>
    </div>
  );
};

export default ChildComponent;
