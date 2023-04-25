import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './slider.css';

function BranchFactorSlider(props) {
  const { branchFactor, setBranchFactor } = props;

  function handleBranchFactor(value) {
    setBranchFactor(value);
  }

  return (
    <div className="input-container">
    <p className="input-label">Branch Factor: {branchFactor}
    <span className="tooltip">&#x1F6C8;
        <span className="tooltiptext">Controls the shape of the maze</span>
    </span>
    </p>
    <InputRange
        value={parseFloat(branchFactor.toFixed(2))}
        minValue={0.0}
        maxValue={1.0}
        step='0.01'
        onChange={(value) => handleBranchFactor(parseFloat(value.toFixed(2)))}
    />
    </div>
  );
}

export default BranchFactorSlider;