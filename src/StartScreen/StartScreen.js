import React from "react";
import "./StartScreen.css";
import { Link } from "react-router-dom";
import "./StartScreen.css";

function StartScreen() {
  return (
    <div className="StartScreen">
      <div className="landing-wrapper">
        <h1>virtual closet</h1>
        <p> i mean, the h1 is pretty clear </p>
        <Link id="start" to="/main">
          <button type="button">Start</button>
        </Link>
        <Link id="info" to="/info">
          <button type="button" id="info">
            Info
          </button>
        </Link>
      </div>
    </div>
  );
}

export default StartScreen;
