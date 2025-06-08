import React from "react";
import "./Feature.css";
import card1Icon from "../../assets/card1Icon.svg";
import card2Icon from "../../assets/card2Icon.svg";
import card3Icon from "../../assets/card3Icon.svg";

const data = [
    {
        id: 1,
        image: card1Icon,
        mainText: "SOP & LOR Masterclass",
        subText: "Learn how to craft compelling Statements of Purpose and strong Letters of Recommendation that stand out to admission officers.",
    },
    {
        id: 2,
        image: card2Icon,
        mainText: "Mock Visa Interviews with Experts",
        subText: "Practice real visa interview scenarios with expert counselors to boost your confidence and avoid common mistakes.",
    },
    {
        id: 3,
        image: card3Icon,
        mainText: "Financial Planning for Study Abroad",
        subText: "Understand the complete financial roadmap—from tuition and living costs to education loans and budgeting tips.",
    },
]
function Feature(){
    
    return (
        <div className="feature">
            <div className="feature-content">
                <h2>What You Will Learn At EEC</h2>
                <p>We’re not just another IELTS coaching center. We’re your test prep partners — committed to your score, your goals, and your future.</p>
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

export default Feature;