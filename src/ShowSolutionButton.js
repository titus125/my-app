import React from 'react';
import { useState, useEffect } from 'react';
import 'react-input-range/lib/css/index.css';
import './slider.css';

function ShowSolutionButton(props) {
  const { mode, setMode, generatePressed } = props;
  const [ buttonText, setButtonText ] = useState("Show Solution")

  useEffect(() => {
    setButtonText("Show Solution")
  }, [generatePressed])

  const handleShowSolution = () => {
    if (!mode) {
      setMode(1);
      setButtonText("Hide Solution") 
    } else {
      setMode(0);
      setButtonText("Show Solution")     
    }
  };

  return (
    <button onClick={handleShowSolution} disabled={!generatePressed} className={`button2 ${!generatePressed ? "disabled" : ""}`}>{buttonText}</button>
  );
}

export default ShowSolutionButton;