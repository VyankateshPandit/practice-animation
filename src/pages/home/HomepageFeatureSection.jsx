import React from "react";
import FeatureCardsSection from "../../components/FeatureCardsSection";
import cardLogo1 from "../../../assets/cardLogo1.svg";
import cardLogo3 from "../../../assets/cardLogo3.svg";
import cardLogo2 from "../../../assets/cardLogo2.svg";
import cardLogo4 from "../../../assets/cardLogo4.svg";
import cardLogo5 from "../../../assets/cardLogo5.svg";
import cardLogo6 from "../../../assets/cardLogo6.svg";
function HomepageFeatureSection() {
  const data = [
    {
      id: 1,
      logo: cardLogo1,
      heading: "Proven Success Rates",
      desc: "Thousands of students score 7.5+ Bands every year — with many hitting 8 and above!",
      headingColor: "#f57b1f",
      cardBorderColor: "#fcd6ba",
      cardBgColor: "#fef2e9",
    },
    {
      id: 2,
      logo: cardLogo2,
      heading: "Certified Expert Trainers",
      desc: "Our mentors are IDP & British Council certified with years of real classroom and exam experience.",
      headingColor: "#1798A6",
      cardBorderColor: "#B7DFE3",
      cardBgColor: "#E8F5F6",
    },
    {
      id: 3,
      logo: cardLogo3,
      heading: "Personalized Study Plans",
      desc: "We tailor learning paths based on your strengths, weak areas, and target score — not just a standard curriculum.",
      headingColor: "#C31E5D",
      cardBorderColor: "#ECB9CD",
      cardBgColor: "#F9E9EF",
    },
    {
      id: 4,
      logo: cardLogo4,
      heading: "Flexible Batches",
      desc: "Weekday or weekend, online or in-person — we fit into your schedule, not the other way around.",
      headingColor: "#69A042",
      cardBorderColor: "#BAD3A8",
      cardBgColor: "#F0F6EC",
    },
    {
      id: 5,
      logo: cardLogo5,
      heading: "Resource-Rich Learning",
      desc: "Exclusive practice materials, mock test simulations, grammar drills, and recorded sessions — all in one place.",
      headingColor: "#2C74B9",
      cardBorderColor: "#9EBFDF",
      cardBgColor: "#EAF1F8",
    },
    {
      id: 6,
      logo: cardLogo6,
      heading: "End-to-End Study Abroad Support",
      desc: "From coaching to admission guidance and visa counseling — we’re with you through every step of your international journey.",
      headingColor: "#E5AF27",
      cardBorderColor: "#FDD571",
      cardBgColor: "#FFF9EA",
    },
  ];
  return (
    <>
      <FeatureCardsSection
        sectionTitle="The EEC Edge — What Makes Us Different?"
        sectionDescription="We’re not just another IELTS coaching center. We’re your test prep
            partners — committed to your score, your goals, and your future."
        cardsData={data}
      />
    </>
  );
}

export default HomepageFeatureSection;
