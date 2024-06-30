import React, { useEffect, useState } from "react";

const HookMouse = () => {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);

  const logMousePosition = (e) => {
    console.log("MouseEvene");
    setx(e.clientX);
    sety(e.clientY);
  };

  useEffect(() => {
    console.log("Useeffect called");
    window.addEventListener("mousemove", logMousePosition);

    return ()=>{
        console.log('Compoenent Unmound');
        window.removeEventListener("mousemove", logMousePosition);

    }
  },[]);

  return (
    <div>
      Hooks X- {x} Y - {y}
    </div>
  );
};

export default HookMouse;
