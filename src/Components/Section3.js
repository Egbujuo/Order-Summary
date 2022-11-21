import React from "react";
import "./Section3.css";
import img from "../images/icon-music.svg";

const Section3 = () => {
  return (
    <div className="wrap">
    <div className="section3">
      <img src={img} alt="" />
      <div className="div">
        <h2>Anual Plan</h2>
        <p>$59.55/year</p>
      </div>
      <a href="#">change</a>
    </div>
    </div>
  );
};

export default Section3;
