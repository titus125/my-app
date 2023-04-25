import React from 'react';
import { useState } from 'react';
import GenerateMazeButton from './GenerateMazeButton.js';
import ShowSolutionButton from './ShowSolutionButton.js';
import RadiusSlider from './RadiusSlider.js';
import BranchFactorSlider from './BranchFactorSilder.js';

function GenerateMaze(props) {
  const { setMaze, setMode, mode, setFetching } = props;
  const [radius, setRadius] = useState(5);
  const [branchFactor, setBranchFactor] = useState(0.45);
  const [generatePressed, setGeneratePressed] = useState(0);

  return (
    <div className="generate-maze">
      <RadiusSlider radius={radius} setRadius={setRadius}/>
      <BranchFactorSlider branchFactor={branchFactor} setBranchFactor={setBranchFactor}/>
      <div className="buttons-container">
        <GenerateMazeButton radius={radius} branchFactor={branchFactor} setMaze={setMaze} 
        setMode={setMode} generatePressed={generatePressed} setGeneratePressed={setGeneratePressed} setFetching={setFetching} />
        <ShowSolutionButton mode={mode} setMode={setMode} generatePressed={generatePressed}/>
      </div>
    </div>
  );
}

export default GenerateMaze;