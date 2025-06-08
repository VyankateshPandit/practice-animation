import React from "react";
import "./Bootcamp.css";
import img1 from "../../assets/canadaFlag.svg";
import img2 from "../../assets/bootCampCardImage.svg";
import img3 from "../../assets/usaFlag.svg";

const data = [
  {
    id: 1,
    text: "Marty Neumann • 1 May 2025",
    heading: "Under Grads: Admission Specials",
  },
  {
    id: 2,
    text: "Marty Neumann • 1 May 2025",
    heading: "Under Grads: Admission Specials",
  },
];

function Bootcamp(props) {
  return (
    <div className="bootcamp">
      <div className="head-text">
        <h2>{props.heading}</h2>
        <p>{props.subHeading}</p>
      </div>
      <div className="bootcamp-cards">
        {data.map((component, index) => {
          return (
            <div
              key={index}
              className={`bootcamp-card bootcamp-card${index + 1}`}
            >
              <div className="bootcamp-card-image relative">
                <div className="slide image1"></div>
                <div className="slide image2"></div>
                <div className="slide image3"></div>
              </div>

              <div className="heading-and-text">
                <p>{component.text}</p>
                <h2>{component.heading}</h2>
              </div>
              <button type="button">Book A Slot Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Bootcamp;
