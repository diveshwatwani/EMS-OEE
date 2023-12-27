// Title.jsx
import React from "react";
import "./Title1.css";

const Title = ({ title }) => {
  return (
    <div className="title">

        <div className="overlap-group">
          <div className="text-wrapper">{title}</div>
      
      </div>
    </div>
  );
};

export default Title;
