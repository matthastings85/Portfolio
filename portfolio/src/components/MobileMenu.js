import React, { useState } from "react";
import StyledMobileMenu from "./styled/MobileMenu.styled";

const MobileMenu = ({ menu, callback }) => {
  const toggleMenu = () => {
    callback((prev) => !prev);
  };
  return (
    <StyledMobileMenu onClick={toggleMenu} menu={menu}>
      <div></div>
      <div></div>
      <div></div>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
