import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import LoadingText from './LoadingText.js';

const loadingText = ["Loading", "Loading.", "Loading..", "Loading..."]

function getNextText(currentText) {
  return loadingText[(loadingText.indexOf(currentText)+1) % 4];
}

function DisplayMaze({ maze, mode, fetching }) {
  const [text, setText] = useState("Loading");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(getNextText(text));
    }, 200);

    return () => {
      clearInterval(intervalId);
    };
  }, [text]);

  return (
    <div className="display-maze">
      {fetching === 1 ? (
        <LoadingText />
      ) : (
        maze &&
        (mode === 0 ? (
          <img src={maze.maze} alt="maze" />
        ) : mode === 1 ? (
          <img src={maze.solution} alt="solution" />
        ) : null)
      )}
    </div>
  );
}


export default DisplayMaze;