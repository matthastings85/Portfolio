import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import StyledDarkModeToggle from "./styled/DarkModeToggle.styled";

const DarkModeToggle = ({ callback, darkMode, hide }) => {
  return (
    <StyledDarkModeToggle hide={hide} onClick={callback} darkMode={darkMode}>
      <div></div>
      <FontAwesomeIcon icon={faSun} />
      <FontAwesomeIcon icon={faMoon} />
    </StyledDarkModeToggle>
  );
};

export default DarkModeToggle;
