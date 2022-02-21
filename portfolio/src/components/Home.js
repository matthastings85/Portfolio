import React from "react";

// Components
import Button from "./Button";
import FadeInSection from "./FadeInSection";

const Home = () => {
  return (
    <>
      <FadeInSection>
        <div className="home-wrapper">
          <div className="home-left">
            <h1 className=" font-accent fs-lg">Matt Hastings</h1>
            <h1 className="font-accent color-bold fs-xl">
              Front-end Developer
            </h1>
            <h3>React, JavaScript, HTML, CSS, SASS, and more.</h3>
            <Button text="View my work" className="main-btn btn-fx1" />
            <Button text="About me" className="alt-btn btn-fx2" />
          </div>
          <div className="home-right"></div>
        </div>
      </FadeInSection>
    </>
  );
};

export default Home;
