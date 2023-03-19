import React, { useState, useEffect } from "react";
import SectionHeading from "./reusable/SectionHeading";
import Card from "./reusable/Card";
import { Flex } from "./styled/Flex.styled";
import { StyledProjects } from "./styled/Projects.styled";

// Content
import projectsContent from "../content/projectsContent";
import SubHeading from "./reusable/SubHeading";

// Utilities
import { projectsDelay } from "../utilities/loader";

const Projects = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), projectsDelay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isMounted && (
        <StyledProjects id="projects">
          <Flex layout="column">
            <SectionHeading>Projects</SectionHeading>
            <SubHeading>Featured Projects</SubHeading>
            <Flex layout="column" width="100%">
              {projectsContent.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </Flex>
          </Flex>
          {/* <SubHeading>Other Noteworthy Projects</SubHeading> */}
        </StyledProjects>
      )}
    </>
  );
};

export default Projects;
