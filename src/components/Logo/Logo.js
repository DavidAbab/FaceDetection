import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import face from "./face.png";

const Logo = () => (
  <div className="ma4 mt0 center">
    <Tilt
      className="Tilt br2 shadow-2"
      options={{ max: 55 }}
      style={{ height: 200, width: 200 }}
    >
      <div className="Tilt-inner">
        <img src={face} alt="logo"></img>
      </div>
    </Tilt>
  </div>
);

export default Logo;
