import React from 'react';

const ProgresCircle = () => (
  <div className="progress-container">
    <div>
      <div>
        <div className="progress blue">
          {' '}
          <span className="progress-left">
            {' '}
            <span className="progress-bar" />
            {' '}
          </span>
          {' '}
          <span className="progress-right">
            {' '}
            <span className="progress-bar" />
            {' '}
          </span>
        </div>
      </div>
    </div>
    <div className="percentage">
      <span>
        100%
        <br />
        <span className="completed">Completed</span>
      </span>
    </div>
  </div>
);

export default ProgresCircle;
