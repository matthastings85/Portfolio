import React, { useState } from "react";
import StyledMobileMenu from "./styled/MobileMenu.styled";

const MobileMenu = ({ menu, callback, hide }) => {
  const toggleMenu = () => {
    callback((prev) => !prev);
  };
  return (
    <StyledMobileMenu hide={hide} onClick={toggleMenu} menu={menu}>
      <div></div>
      <div></div>
      <div></div>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
