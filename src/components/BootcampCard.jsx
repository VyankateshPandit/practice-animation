import React from "react";
import "./BootcampCard.css";
function BootcampCard({ data }) {
  return (
    <>
      <div className="bootcamp-card">
        <img src={data.cardLogo} alt="" />
        <h1 className="bootcamp-card-heading">{data.cardHeading}</h1>
        <p className="bootcamp-card-desc">{data.cardDesc}</p>
        <div className="bootcamp-card-features">
          <div className="bootcamp-feature">
            <h1 className="bootcamp-feature-heading">
              {data.cardFeatures.feature1.feature1Title}
            </h1>
            <p className="bootcamp-feature-desc">
              {data.cardFeatures.feature1.feature1Desc}
            </p>
          </div>
          <div className="bootcamp-feature">
            <h1 className="bootcamp-feature-heading">
              {data.cardFeatures.feature2.feature2Title}
            </h1>
            <p className="bootcamp-feature-desc">
              {data.cardFeatures.feature2.feature2Desc}
            </p>
          </div>
          <div className="bootcamp-feature">
            <h1 className="bootcamp-feature-heading">
              {data.cardFeatures.feature3.feature3Title}
            </h1>
            <p className="bootcamp-feature-desc">
              {data.cardFeatures.feature3.feature3Desc}
            </p>
          </div>
        </div>
        <button className="bootcamp-card-btn">Enroll Now - It’s Free</button>
      </div>
    </>
  );
}

export default BootcampCard;
