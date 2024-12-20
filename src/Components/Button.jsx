import React from "react";

const Button = ({ text, color }) => {
  return (
    <button
      className="button"
      style={{
        backgroundColor: color ? color : "#ffff",
      }}>
      {text}
    </button>
  );
};

export default Button;
