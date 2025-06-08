import React from "react";
import "./FeatureCardsSection.css";
import FeatureCard from "./FeatureCard";

function FeatureCardsSection(props) {
  const cards = props.cardsData || [];

  return (
    <>
      <div className="cards-container">
        <div className="cards-text-section">
          <h1 className="cards-text-heading">{props.sectionTitle}</h1>
          <p className="cards-text-desc">{props.sectionDescription}</p>
        </div>
        <div className="cards-section">
          {cards.map((item) => (
            <FeatureCard {...item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default FeatureCardsSection;
