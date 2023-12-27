import React from 'react';
import './Card.css'; // Make sure to create a corresponding CSS file

const Card = () => {
  return (
    <div className="card">
      <div className="header">
        <h1>Overall 0EEE ie 84.15%</h1>
      </div>
      <div className="content">
        <div className="metric">
          <p>Availability</p>
          <p>91.93%</p>
        </div>
        <div className="metric">
          <p>Performance</p>
          <p>96.36%</p>
        </div>
        <div className="metric">
          <p>Quality</p>
          <p>95%</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
