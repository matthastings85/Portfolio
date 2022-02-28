import React, { useEffect, useState } from "react";
import { StyledHeader, Nav, NavMenu } from "./styled/Header.styled";
import Button from "./Button";
import { Flex } from "./styled/Flex.styled";
import MobileMenu from "./MobileMenu";
import DarkModeToggle from "./DarkModeToggle";

const Header = ({ setDarkMode, darkMode, goingUp }) => {
  const [hide, setHide] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setHide(() => (goingUp ? false : true));
  }, [goingUp]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const route = () => {};
  return (
    <StyledHeader>
      <Nav hide={hide}>
        <Flex>
          <a href="#home">
            <span>M</span>
          </a>
        </Flex>
        <NavMenu menu={menuOpen} onClick={closeMenu}>
          <a href="#projects">
            <Button
              hide={hide}
              menu={menuOpen}
              type="nav"
              text="Projects"
              callback={closeMenu}
            />
          </a>
          <a href="#about">
            <Button
              hide={hide}
              menu={menuOpen}
              type="nav"
              text="About Me"
              callback={closeMenu}
            />
          </a>
          <a href="#resume">
            <Button
              hide={hide}
              menu={menuOpen}
              type="nav"
              text="Resume"
              callback={closeMenu}
            />
          </a>
          <a href="#contact">
            <Button
              hide={hide}
              menu={menuOpen}
              type="nav"
              text="Contact"
              callback={closeMenu}
            />
          </a>
          <DarkModeToggle
            hide={hide}
            menu={menuOpen}
            callback={setDarkMode}
            darkMode={darkMode}
          />
        </NavMenu>
        <MobileMenu hide={hide} menu={menuOpen} callback={setMenuOpen} />
      </Nav>
    </StyledHeader>
  );
};

export default Header;
