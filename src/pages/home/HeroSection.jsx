import React, { useEffect, useState } from "react";
import "./HeroSection.css";

import topImg1 from "../../../assets/heroImg_1_1.svg";
import topImg2 from "../../../assets/heroImg_1_2.svg";
import topImg3 from "../../../assets/heroImg_1_3.svg";

import middleImg1 from "../../../assets/heroImg_2_1.svg";
import middleImg2 from "../../../assets/heroImg_2_2.svg";
import middleImg3 from "../../../assets/heroImg_2_3.svg";

import bottomImg1 from "../../../assets/heroImg_3_1.svg";
import bottomImg2 from "../../../assets/heroImg_3_2.svg";
import bottomImg3 from "../../../assets/heroImg_3_3.svg";

function Hero() {
  const topImages = [topImg1, topImg2, topImg3];
  const middleImages = [middleImg1, middleImg2, middleImg3];
  const bottomImages = [bottomImg3, bottomImg1, bottomImg2];

  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex2((prevIndex2) => (prevIndex2 + 1) % 3);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex3((prevIndex3) => (prevIndex3 + 1) % 3);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="hero-container">
      <div className="hero-text-section">
        <h1 className="hero-heading">
          Your Gateway to Global Education Starts Here!
        </h1>
        <p className="hero-tagline">
          Personalized and Comprehensive Study Plan for Master IELTS with
          Expert-Led Training. We help you make your dream come true!
        </p>
        <button className="hero-button">Book A Call Now</button>
      </div>

      <div className="hero-img-section">
        <div className="top-img">
          <img src={topImages[index]} className="top-img1" alt="Top Hero" />
        </div>
        <div className="lower-img">
          <img
            src={middleImages[index2]}
            className="lower-img1"
            alt="Middle Hero"
          />
          <img
            src={bottomImages[index3]}
            className="lower-img2"
            alt="Bottom Hero"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
