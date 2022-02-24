import React, { useState } from "react";
import FadeInSection from "./FadeInSection";
import SectionHeading from "./SectionHeading";
import Card from "./Card";
import { Flex } from "./styled/Flex.styled";
import { Grid } from "./styled/Grid.styled";
import { StyledProjects } from "./styled/Projects.styled";

// Content
import projectsContent from "../projectsContent";
import SubHeading from "./SubHeading";

const Projects = () => {
  return (
    <>
      <FadeInSection>
        <StyledProjects>
          <Flex layout="column">
            <SectionHeading>Projects</SectionHeading>
            <SubHeading>Featured Projects</SubHeading>
            <Flex layout="column">
              {projectsContent.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </Flex>
          </Flex>
          <SubHeading>Other Noteworthy Projects</SubHeading>
        </StyledProjects>
      </FadeInSection>
    </>
  );
};

export default Projects;
