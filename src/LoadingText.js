import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

const loadingStates = ["Generating Maze", "Generating Maze.", "Generating Maze..", "Generating Maze..."]

function getNextText(currentState) {
  return loadingStates[(loadingStates.indexOf(currentState)+1) % 4];
}

function LoadingText() {
  const [text, setText] = useState("Generating Maze");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(getNextText(text));
    }, 200);

    return () => {
      clearInterval(intervalId);
    };
  }, [text]);

  return (
    <h1>{text}</h1>
  );
}

export default LoadingText;