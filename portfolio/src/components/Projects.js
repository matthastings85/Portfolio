import React, { useState } from "react";
import SectionHeading from "./reusable/SectionHeading";
import Card from "./reusable/Card";
import { Flex } from "./styled/Flex.styled";
import { Grid } from "./styled/Grid.styled";
import { StyledProjects } from "./styled/Projects.styled";

// Content
import projectsContent from "../content/projectsContent";
import SubHeading from "./reusable/SubHeading";

const Projects = () => {
  return (
    <>
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
    </>
  );
};

export default Projects;
