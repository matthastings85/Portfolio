import React from "react";

// Components
import FadeInSection from "./FadeInSection";

// images
import matt from "../images/matt.png";

const About = () => {
  return (
    <FadeInSection>
      <div className="about-wrapper">
        <div className="content">
          <div className="about-content">
            <h1 className="section-heading">About Me</h1>
            <p>
              Hi, my name is Matt. After spending over ten years learning dead
              languages (languages no one speaks), I decided to learn some{" "}
              <em>languages</em> that are a little more lucrative. Yes, I can
              still parse your Ancient Hebrew verbs (or Greek or Akkadian or
              Aramaic), but you're probably more interested in my skills with
              ReactJS, SASS/CSS, and JavaScript.{" "}
            </p>
            <p>
              I grew up in South Africa but I've been living and working the USA
              for over 10 years. I have 13 years of experience in non-profit
              management. I built and lead teams to complete countless projects.
            </p>
            <p>
              At the beggining of 2021, my wife got a new job that eventually
              lead our family to move from South Carolina to Illinois. This move
              provided me with the opportunity to explore different vocational
              opportunities. My brother-in-law suggested I learn to code. He
              sent me a free online bootcamp by Frontend Masters. After
              completing that bootcamp I was hooked.
            </p>
            <p>
              I started learning HTML, CSS, and JavaScript. After that, I have
              focused specifically on ReactJS. I've had a lot of fun building
              projects and expanding my skills. It's been awesome to get
              feedback from some senior developers and I'm pumped about the
              progress I've made.
            </p>
            <p>
              I am now seeking a full-time where I can utilize my skills in
              coding and project management to help a company achieve success in
              their goals.
            </p>
          </div>
          <img src={matt} alt="Matt profile pic"></img>
        </div>
      </div>
    </FadeInSection>
  );
};

export default About;
