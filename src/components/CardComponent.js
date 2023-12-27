// CardComponent.jsx
import React from 'react';
import PropTypes from 'prop-types';

const CardComponent = ({ title, headingText, children }) => {
  const cardStyle = {
    height: '250px', // Set the desired height
    border: '1px solid #ddd', // Add any other styling properties as needed
    borderRadius: '10px',
    padding: '15px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div className="card-component" style={cardStyle}>
      <div className="unplanned-down-time">
        <div className="card-title">{title}</div>
        <h2 className="card-heading" style={{ color: 'black' }}>{headingText}</h2>
        {children}
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  headingText: PropTypes.string,
  children: PropTypes.node,
};

export default CardComponent;



