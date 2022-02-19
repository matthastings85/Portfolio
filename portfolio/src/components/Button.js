import React from "react";

const Button = ({ text, callback, id, className }) => {
  return (
    <button className={className} onClick={callback} id={id}>
      {text}
    </button>
  );
};

export default Button;
