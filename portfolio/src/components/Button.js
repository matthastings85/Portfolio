import React from "react";

import { MainBtn, NavBtn, AltBtn } from "./styled/Button.styled";

const Button = ({ text, callback, id, type, hide, menu }) => {
  return type === "nav" ? (
    <NavBtn hide={hide} onClick={callback} id={id} menu={menu}>
      {text}
    </NavBtn>
  ) : type === "alt" ? (
    <AltBtn onClick={callback} id={id}>
      {text}
    </AltBtn>
  ) : type === "submit" ? (
    <MainBtn type={type} id={id}>
      {text}
    </MainBtn>
  ) : (
    <MainBtn onClick={callback} id={id}>
      {text}
    </MainBtn>
  );
};

export default Button;
