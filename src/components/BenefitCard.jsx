import React from "react";

const BenefitCard = ({ icon, title, cardClass, titleClass }) => (
  <div className={cardClass}>
    {icon}
    <div className={titleClass}>{title}</div>
  </div>
);

export default BenefitCard; 