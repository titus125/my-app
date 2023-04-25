import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './slider.css';

function RadiusSlider(props) {
  const { radius, setRadius } = props;

  function handleRadius(value) {
    setRadius(value);
  }

  return (
    <div className="input-container">
    <p className="input-label">Maze Radius: {radius}
    <span className="tooltip">&#x1F6C8;
        <span className="tooltiptext">Controls the size of the maze</span>
    </span>
    </p>
    <InputRange
        value={radius}
        minValue={3}
        maxValue={15}
        onChange={handleRadius}
    />
    </div>
  );
}

export default RadiusSlider;