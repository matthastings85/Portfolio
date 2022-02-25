import React from "react";

// Components
import FadeInSection from "./FadeInSection";
import SectionHeading from "./SectionHeading";
import { StyledAbout } from "./styled/About.styled";
import { Flex } from "./styled/Flex.styled";
import aboutContent from "../aboutContent";

const About = () => {
  return (
    <FadeInSection>
      <StyledAbout id="about">
        <SectionHeading>About Me</SectionHeading>
        <div>
          <div>
            {aboutContent.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
          <img src="./images/matt.png" alt="Matt profile pic"></img>
        </div>
      </StyledAbout>
    </FadeInSection>
  );
};

export default About;
