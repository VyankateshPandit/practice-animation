import React from "react";
import "./LogoScrollingEffect.css";
import dartmouth from "../../assets/dartmouth.svg";
import harvard from "../../assets/harvard_university.svg";
import london from "../../assets/london_busi_school.svg";
import mit from "../../assets/MIT.svg";
import nyu from "../../assets/nyu.svg";
import oxford from "../../assets/oxford.svg";
import standford from "../../assets/standford_university.svg";
import ucla from "../../assets/ucla.svg";
import university from "../../assets/university.svg";
import yale from "../../assets/yale.svg";

const logos = [
  harvard,
  ucla,
  yale,
  standford,
  oxford,
  university,
  nyu,
  dartmouth,
  london,
  mit,
];

function LogoScrollingEffect(props) {
  // Duplicate the array for seamless scroll effect
  const scrollingImages = [...logos, ...logos];

  return (
    <div className="university-container">
      <div className="university-text-section">
        <h3 className="university-heading">{props.sectionTitle}</h3>
        <p className="university-tagline">{props.sectionDescription}</p>
      </div>
      <div className="university-logos-section">
        <div className="scrolling-images">
          <div className="logo items1">
            {scrollingImages.map((img, idx) => (
              <img src={img} alt={`logo-${idx}`} key={`row1-${idx}`} />
            ))}
          </div>
        </div>
        <div className="scrolling-images">
          <div className="logo items2">
            {scrollingImages.map((img, idx) => (
              <img src={img} alt={`logo-${idx}`} key={`row2-${idx}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoScrollingEffect;
