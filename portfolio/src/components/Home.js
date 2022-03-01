import React from "react";

// Components
import Button from "./Button";
import { StyledHome } from "./styled/Home.styled";
import ComplimentGenerator from "./ComplimentGenerator";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <StyledHome id="home">
      <div>
        <Welcome />
        <h2>Matt Hastings</h2>
        <h1>Front-end Developer</h1>
        <h3>React, JavaScript, HTML, CSS, SASS, and more.</h3>
        <div id="home-buttons">
          <a href="#projects">
            <Button text="View my work" />
          </a>
          <a href="#about">
            <Button type="alt" text="About me" />
          </a>
        </div>
      </div>
      <ComplimentGenerator />
    </StyledHome>
  );
};

export default Home;
