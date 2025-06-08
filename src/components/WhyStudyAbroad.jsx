import React from "react";
import './WhyStudyAbroad.css';
import GroupqIcon from "../../assets/Group.svg";
import GroupIcon from "../../assets/Group 1.svg";
import Group1Icon from "../../assets/Group (1).svg";
import IconsIcon from "../../assets/Icons.svg";
import BenefitCard from "./BenefitCard";

const benefits = [
  {
    icon: <img src={GroupIcon} alt="Group" className="benefit-card__icon benefit-card__icon--magenta" />,
    title: "Earn a globally recognized degree",
    cardClass: "benefit-card benefit-card--magenta",
    titleClass: "benefit-card__title benefit-card__title--magenta"
  },
  {
    icon: <img src={GroupqIcon} alt="Group Q" className="benefit-card__icon benefit-card__icon--cyan" />,
    title: "Improve career prospects",
    cardClass: "benefit-card benefit-card--second",
    titleClass: "benefit-card__title benefit-card__title--cyan"
  },
  {
    icon: <img src={Group1Icon} alt="Group 1" className="benefit-card__icon benefit-card__icon--Blue" />,
    title: "Explore new cultures & lifestyles",
    cardClass: "benefit-card benefit-card--third",
    titleClass: "benefit-card__title benefit-card__title--Blue"
  },
  {
    icon: <img src={IconsIcon} alt="Icons" className="benefit-card__icon benefit-card__icon--yellow" />,
    title: "Gain work & PR opportunities",
    cardClass: "benefit-card benefit-card--fourth",
    titleClass: "benefit-card__title benefit-card__title--yellow"
  }
];

const WhyStudyAbroad = () => (
  <section className="why-study-abroad-section">
    <div className="why-study-abroad-header">
      <h2>Why Study Abroad?</h2>
      <p className="section-desc">
        More than education. It's a life-changing experience.
      </p>
    </div>
    <div className="why-study-abroad-grid">
      {benefits.map((b, i) => (
        <BenefitCard
          key={i}
          icon={b.icon}
          title={b.title}
          cardClass={b.cardClass}
          titleClass={b.titleClass}
        />
      ))}
    </div>
  </section>
);

export default WhyStudyAbroad; 