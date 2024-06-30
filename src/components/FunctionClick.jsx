import React from "react";

const FunctionClick = () => {
  function clickHandler() {
    alert("Click");
  }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default FunctionClick;
