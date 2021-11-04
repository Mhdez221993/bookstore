import React from 'react';
import './ProgresCircle.css';

const ProgresCircle = () => (
  <div className="progress-container">
    <div className="circular-progress-container">
      <div className="circular-progress" />
    </div>
    <div className="wrapper-percentage">
      <span className="percentage">100%</span>
      <span className="completed">Completed</span>
    </div>
  </div>
);

export default ProgresCircle;
