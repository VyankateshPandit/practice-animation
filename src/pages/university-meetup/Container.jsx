import React from "react";
import "../../components/Feature.css";
import card1Icon from "../../../assets/card1Icon.svg";
import card2Icon from "../../../assets/card2Icon.svg";
import card3Icon from "../../../assets/card3Icon.svg";


const data = [
  {
    id: 1,
    image: card1Icon,
    mainText: "Evaluation & Feedback",
    subText: "Have your profile reviewed by university delegates and counselors for real-time advice to enhance your admission chances.",
  },
  {
    id: 2,
    image: card2Icon,
    mainText: "Fee Waivers for Early Applicants",
    subText: "Register early at the fair to save up to ₹10,000 on application fees at select universities. Limited slots—act fast!",
  },
  {
    id: 3,
    image: card3Icon,
    mainText: "Scholarships Worth ₹5 Lakhs",
    subText: "Explore exclusive merit and need-based scholarships at our admission fair. Unlock opportunities to reduce your study abroad costs.",
  },
];

function Container(){
    
    return (
        <div className="feature">
            <div className="feature-content">
                <h2>Talk with University Couselors</h2>
                <p>Schedule a personalized session with our university counselors.</p>
            </div>
            <div className="feature-cards">
                {data.map((component)=>{
                    return <div className={`feature-card feature-card${component.id}`} key={component.id}>
                        <img src={component.image} alt="feature-img"/>
                        <h2>{component.mainText}</h2>
                        <p>{component.subText}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Container;