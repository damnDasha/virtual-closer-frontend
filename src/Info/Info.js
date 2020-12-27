import React from "react";
import { Link } from "react-router-dom";
import "./Info.css";

function Info() {
  return (
    <div className="Info">
      <h3>a way to decide what to wear</h3>
      <p>
        I'm a planner, so i need to plan all my outfits in advance. <br></br>
        That's why i made this app
      </p>
      <Link id="start" to="/login">
        <button type="button">get started!</button>
      </Link>
    </div>
  );
}

export default Info;
