import React, { useEffect, useRef } from "react";
const FocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    //focus the input element
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" name="" id="" />
    </div>
  );
};

export default FocusInput;
