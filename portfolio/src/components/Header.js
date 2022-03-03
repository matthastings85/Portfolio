import React, { useEffect, useState } from "react";
// Components
import Button from "./reusable/Button";
import MobileMenu from "./reusable/MobileMenu";
import DarkModeToggle from "./reusable/DarkModeToggle";
// Utilities
import { Flex } from "./styled/Flex.styled";
import { navDelay, transition } from "../utilities/loader";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// Styles
import { StyledHeader, Nav, NavMenu } from "./styled/Header.styled";

const Header = ({ setDarkMode, darkMode, goingUp }) => {
  const [hide, setHide] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setHide(() => (goingUp ? false : true));
  }, [goingUp]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setFinished(true), 3000);
    return () => clearTimeout(timeout);
  }, []);

  const one = (
    <a href="#projects">
      <Button
        hide={hide}
        menu={menuOpen}
        type="nav"
        text="Projects"
        callback={closeMenu}
      />
    </a>
  );
  const two = (
    <a href="#about">
      <Button
        hide={hide}
        menu={menuOpen}
        type="nav"
        text="About Me"
        callback={closeMenu}
      />
    </a>
  );
  const three = (
    <a
      href="https://matthastings85.github.io/hosted-assets/MattHastingsResume_mar2022.pdf"
      target="blank"
    >
      <Button
        hide={hide}
        menu={menuOpen}
        type="nav"
        text="Resume"
        callback={closeMenu}
      />
    </a>
  );
  const four = (
    <a href="#contact">
      <Button
        hide={hide}
        menu={menuOpen}
        type="nav"
        text="Contact"
        callback={closeMenu}
      />
    </a>
  );
  const five = (
    <DarkModeToggle
      hide={hide}
      menu={menuOpen}
      callback={setDarkMode}
      darkMode={darkMode}
    />
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeader>
      <Nav hide={hide}>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames="fadedown" timeout={transition}>
              <Flex style={{ transitionDelay: "100ms" }}>
                <a href="#home">
                  <span>M</span>
                </a>
              </Flex>
            </CSSTransition>
          )}
          <NavMenu menu={menuOpen} onClick={closeMenu}>
            <TransitionGroup component={null}>
              {isMounted &&
                items.map((item, i) => (
                  <CSSTransition
                    key={i}
                    classNames="fadedown"
                    timeout={transition}
                  >
                    {!finished ? (
                      <div style={{ transitionDelay: `${i + 1}00ms ` }}>
                        {item}
                      </div>
                    ) : (
                      <div>{item}</div>
                    )}
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </NavMenu>
        </TransitionGroup>
        <MobileMenu hide={hide} menu={menuOpen} callback={setMenuOpen} />
      </Nav>
    </StyledHeader>
  );
};

export default Header;
