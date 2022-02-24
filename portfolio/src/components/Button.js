import React from "react";

import { MainBtn, NavBtn, AltBtn } from "./styled/Button.styled";

const Button = ({ text, callback, id, type }) => {
  return type === "nav" ? (
    <NavBtn onClick={callback} id={id}>
      {text}
    </NavBtn>
  ) : type === "alt" ? (
    <AltBtn onClick={callback} id={id}>
      {text}
    </AltBtn>
  ) : (
    <MainBtn onClick={callback} id={id}>
      {text}
    </MainBtn>
  );
};

export default Button;
