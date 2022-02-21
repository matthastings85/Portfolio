import React from "react";
import FadeInSection from "./FadeInSection";

const Projects = () => {
  return (
    <>
      <FadeInSection>
        <div className="projects-wrapper">
          <h1 className="section-heading">Projects</h1>
          <div className="projects-grid">
            <div className="projects-card card-1"></div>
            <div className="projects-card"></div>
            <div className="projects-card"></div>
            <div className="projects-card"></div>
          </div>
        </div>
      </FadeInSection>
    </>
  );
};

export default Projects;
