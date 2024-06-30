import React from "react";
import "./myStyle.css";

const StyleSheet = (props) => {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className={`${className} font-xl`}>StyleSheet</h1>
    </div>
  );
};

export default StyleSheet;
