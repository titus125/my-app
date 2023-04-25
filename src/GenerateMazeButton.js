import React from 'react';
import fetch_maze from './fetchMaze.js';
import 'react-input-range/lib/css/index.css';

function GenerateMazeButton(props) {
  const { radius, branchFactor, setMaze, setMode, generatePressed, setGeneratePressed, setFetching} = props;

  const handleGenerateMaze = () => {
    setFetching(1);
    fetch_maze(radius, undefined, undefined, branchFactor, undefined, 0 ,0).then(maze => {
      setMaze(maze);
      setMode(0);
      setGeneratePressed(generatePressed+1);
      setFetching(0);
    });
  };

  return (
    <button class="button1" onClick={handleGenerateMaze}>Generate Maze</button>
  );
}

export default GenerateMazeButton;