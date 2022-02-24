import React from "react";

// Components
import Button from "./Button";
import FadeInSection from "./FadeInSection";
import { StyledHome } from "./styled/Home.styled";

const Home = () => {
  return (
    <>
      <FadeInSection>
        <StyledHome>
          <div>
            <h2>Matt Hastings</h2>
            <h1>Front-end Developer</h1>
            <h3>React, JavaScript, HTML, CSS, SASS, and more.</h3>
            <Button text="View my work" />
            <Button type="alt" text="About me" />
          </div>
          <div></div>
        </StyledHome>
      </FadeInSection>
    </>
  );
};

export default Home;
