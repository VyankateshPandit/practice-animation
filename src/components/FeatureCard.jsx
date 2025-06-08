import React from "react";
import "./FeatureCard.css";
function FeatureCard(props) {
  return (
    <>
      <div
        className="card-container"
        style={{
          borderColor: props.cardBorderColor,
          background: props.cardBgColor,
        }}
      >
        <img src={props.logo} alt="" className="card-logo" />
        <h3
          className="card-heading"
          style={{
            color: props.headingColor,
          }}
        >
          {" "}
          {props.heading}
        </h3>
        <p className="card-desc">{props.desc}</p>
      </div>
    </>
  );
}

export default FeatureCard;
