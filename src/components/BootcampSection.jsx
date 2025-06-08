import React from "react";
import "./BootcampSection.css";
import ETSLogo from "../../assets/ets_logo.svg";
import IETS_IDP_Logo from "../../assets/ielts_idp_india_logo.svg";
import BootcampCard from "./BootcampCard";
function BootcampSection() {
  const cardData = [
    {
      id: 1,
      cardLogo: ETSLogo,
      cardHeading: "Ace Your GRC With Top Scorers",
      cardDesc:
        "Score 330+ with the most effective and up to date strategies for each section",
      cardFeatures: {
        feature1: {
          feature1Title: "1370",
          feature1Desc: "Active Grey Test Takers",
        },
        feature2: {
          feature2Title: "346+",
          feature2Desc: "Top Scorers Helping You",
        },
        feature3: {
          feature3Title: "134",
          feature3Desc: "Grey Expert & Mentors",
        },
      },
    },
    {
      id: 2,
      cardLogo: IETS_IDP_Logo,
      cardHeading: "Ace Your IELTS With Top Scorers",
      cardDesc:
        "Score 330+ with the most effective and up to date strategies for each section",
      cardFeatures: {
        feature1: {
          feature1Title: "1370",
          feature1Desc: "Active Grey Test Takers",
        },
        feature2: {
          feature2Title: "346+",
          feature2Desc: "Top Scorers Helping You",
        },
        feature3: {
          feature3Title: "134",
          feature3Desc: "Grey Expert & Mentors",
        },
      },
    },
  ];

  return (
    <>
      <div className="bootcamp-container">
        <div className="bootcamp-text-section">
          <h1 className="bootcamp-heading">
            Ace IELTS with Our Free Bootcamps
          </h1>
          <p className="bootcamp-desc">
            Intensive, expert-led training sessions designed to fast-track your
            success.
          </p>
        </div>
        <div className="bootcamp-cards-section">
          {cardData.map((item, index) => (
            <BootcampCard data={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default BootcampSection;
