import React from "react";
import "./Button.css";

const Button = ({ type = null, onClick = null, children }) => {
  return (
    <div className="custom-btn">
      <button type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
