import React, { useEffect, useState } from "react";
import { StyledHeader, Nav, NavMenu } from "./styled/Header.styled";
import Button from "./Button";
import { Flex } from "./styled/Flex.styled";
import MobileMenu from "./MobileMenu";
import DarkModeToggle from "./DarkModeToggle";

const Header = ({ setDarkMode, darkMode, goingUp }) => {
  const [hide, setHide] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setHide(() => (goingUp ? false : true));
  }, [goingUp]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const route = () => {};
  return (
    <StyledHeader hide={hide ? "-100px" : "0px"}>
      <Nav>
        <Flex>
          <span>M</span>
        </Flex>
        <NavMenu menu={menuOpen}>
          <a href="#projects">
            <Button type="nav" text="Projects" callback={closeMenu} />
          </a>
          <a href="#about">
            <Button type="nav" text="About Me" callback={closeMenu} />
          </a>
          <a href="#resume">
            <Button type="nav" text="Resume" callback={closeMenu} />
          </a>
          <a href="#contact">
            <Button type="nav" text="Contact" callback={closeMenu} />
          </a>
          <DarkModeToggle callback={setDarkMode} darkMode={darkMode} />
        </NavMenu>
        <MobileMenu menu={menuOpen} callback={setMenuOpen} />
      </Nav>
    </StyledHeader>
  );
};

export default Header;
