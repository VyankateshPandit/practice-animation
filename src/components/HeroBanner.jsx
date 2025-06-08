import React from "react";
import "./HeroBanner.css";
import { useState, useEffect } from "react";

function HeroBanner({ heading, subHeading, images }){
    const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => {
        const currentIndex = images.indexOf(prev);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

    return (
        <div className="hero-banner">
            <div className="card-content">
                <div className="head-text">
                    <h1>{heading}</h1>
                    <p>{subHeading}</p>
                </div>
                <div 
                    className="hero-banner-images"
                    style = {{backgroundImage:`url(${currentImage})`}}
                ></div>
            </div>
        </div>
    )
}

export default HeroBanner;