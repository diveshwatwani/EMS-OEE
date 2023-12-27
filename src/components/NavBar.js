import React from "react";
import "../components/NavBar.css";
import logOutImage from "../images/logOutImage.png";
import alignJustifyImage from "../images/alignJustifyImage.png";

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="text-wrapper">Energy Monitoring System</div>
      <img className="log-out" alt="Log out" src={logOutImage} />
      <img className="align-justify" alt="Align justify" src={alignJustifyImage} />
    </div>
  );
};

export default NavBar