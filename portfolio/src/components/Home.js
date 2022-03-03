import React, { useState, useEffect } from "react";

// Components
import Button from "./reusable/Button";
import { StyledHome } from "./styled/Home.styled";
import ComplimentGenerator from "./reusable/ComplimentGenerator";
import Welcome from "./reusable/Welcome";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Flex } from "./styled/Flex.styled";

// Functions
import { getToolIcon } from "../utilities/utilityFunctions";

// Utilities
import { homeDelay, transition } from "../utilities/loader";

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), homeDelay);
    return () => clearTimeout(timeout);
  }, []);

  const tools = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "SASS",
    "Bootstrap",
    "GitHub",
    "Codepen",
    "Git",
  ];

  const zero = (
    <CSSTransition classNames="fadedown" timeout={transition}>
      <Welcome />
    </CSSTransition>
  );
  const one = <h2>Matt Hastings</h2>;
  const two = <h1>Front-end Developer</h1>;
  const three = (
    <Flex jcSpaceBetween id="tool-icons">
      {tools.map((tool, index) => getToolIcon(tool, index))}
    </Flex>
  );
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
        <div>
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
        </div>
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
