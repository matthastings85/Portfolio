import React, { useState, useEffect } from "react";

// Components
import Button from "./reusable/Button";
import { StyledHome } from "./styled/Home.styled";
import ComplimentGenerator from "./reusable/ComplimentGenerator";
import Welcome from "./reusable/Welcome";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Utilities
import { homeDelay, transition } from "../utilities/loader";
import ToolsSwiper from "./ToolsSwiper";
import StyledHomeWrapper from "./styled/HomeWrapper.styled";

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), homeDelay);
    return () => clearTimeout(timeout);
  }, []);

  const zero = (
    <CSSTransition classNames="fadedown" timeout={transition}>
      <Welcome />
    </CSSTransition>
  );
  const one = <h2>Matt Hastings</h2>;
  const two = <h1>Front-end Developer</h1>;
  const three = <ToolsSwiper />;
  const four = (
    <div id="home-buttons">
      <a href="#projects">
        <Button text="View my work" />
      </a>
      <a href="#about">
        <Button type="alt" text="About me" />
      </a>
    </div>
  );

  const items = [zero, one, two, three, four];

  return (
    <StyledHome id="home">
      <TransitionGroup component={null}>
        <StyledHomeWrapper>
          <TransitionGroup component={null}>
            {isMounted &&
              items.map((item, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadedown"
                  timeout={transition}
                >
                  <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </StyledHomeWrapper>
        {isMounted && (
          <CSSTransition classNames="fadedown" timeout={transition}>
            <div style={{ transitionDelay: `${items.length + 1}00ms` }}>
              <ComplimentGenerator />
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </StyledHome>
  );
};

export default Home;
