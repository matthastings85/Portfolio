import React from "react";
import { StyledHeader, Nav } from "./styled/Header.styled";
import Button from "./Button";
import { Flex } from "./styled/Flex.styled";

const Header = (props) => {
  return (
    <StyledHeader>
      <Nav>
        <Flex>
          <span>M</span>
        </Flex>
        <Flex>
          <Button type="nav" text="Projects" />
          <Button type="nav" text="About Me" />
          <Button type="nav" text="Resume" />
          <Button type="nav" text="Contact" />
          <Button type="nav" text="Dark/Light" callback={props.callback} />
        </Flex>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
