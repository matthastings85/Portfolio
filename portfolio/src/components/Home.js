import React from "react";

// images
import matt from "../images/matt.png";

// Components
import Button from "./Button";
import FadeInSection from "./FadeInSection";

const Home = () => {
  return (
    <>
      <FadeInSection>
        <div className="home-wrapper">
          <div className="home-left">
            <h1 className="color-bold font-accent fs-lg">Matt Hastings</h1>
            <h1 className="font-accent color-accent fs-xl">
              Front-end Developer
            </h1>
            <h3>React, JavaScript, HTML, CSS, SASS, and more.</h3>
            <Button text="View my work" className="main-btn btn-fx1" />
            <Button text="About me" className="alt-btn btn-fx2" />
          </div>
          <div className="home-right">
            <img src={matt} alt="Matt profile pic"></img>
          </div>
        </div>
      </FadeInSection>
    </>
  );
};

export default Home;
