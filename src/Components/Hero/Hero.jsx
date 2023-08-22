import React from "react";
import "./Hero.css";
import HeroImg from "../../assests/vibrating-headphone.png";

const Hero = () => {
  return (
    <div className="HeroContainer">
      <div className="heroText">
        <h1>100 Thousand Songs ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <img className="heroImg" src={HeroImg} alt="HeroImage" />
    </div>
  );
};

export default Hero;
