import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <div className="header-nav-wrapper">
      <div className="header"></div>
      <nav className="nav-bar">
        <div className="nav-left">
          <div className="logo">M</div>
        </div>
        <div className="nav-right">
          <Button text="Projects" className="nav-btn btn-fx3" />
          <Button text="About Me" className="nav-btn btn-fx3" />
          <Button text="Resume" className="nav-btn btn-fx3" />
          <Button text="Contact" className="nav-btn btn-fx3" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
