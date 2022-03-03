import React, { useEffect, useState } from "react";

// Components
import SectionHeading from "./reusable/SectionHeading";
import { StyledAbout } from "./styled/About.styled";
import aboutContent from "../content/aboutContent";
import { aboutDelay } from "../utilities/loader";

const About = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, aboutDelay);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {isMounted && (
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
      )}
    </>
  );
};

export default About;
