import React from "react";

// Components
import Button from "./Button";
import FadeInSection from "./FadeInSection";
import { StyledHome } from "./styled/Home.styled";
import ComplimentGenerator from "./ComplimentGenerator";

const Home = () => {
  return (
    <>
      <StyledHome>
        <div>
          <h2>Matt Hastings</h2>
          <h1>Front-end Developer</h1>
          <h3>React, JavaScript, HTML, CSS, SASS, and more.</h3>
          <a href="#projects">
            <Button text="View my work" />
          </a>
          <a href="#about">
            <Button type="alt" text="About me" />
          </a>
        </div>
        <ComplimentGenerator />
      </StyledHome>
    </>
  );
};

export default Home;
