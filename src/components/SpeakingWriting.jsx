import React from "react";
import "./SpeakingWriting.css";
import icon1 from "../../assets/Icon1.svg";
import icon2 from "../../assets/Icon2.svg";
import icon3 from "../../assets/Icon3.svg";

const speakingCards = [
  {
    id: 1,
    heading: "Performance Tracking",
    text: "Get regular feedback on your speaking & writing.",
    image: icon1,
  },
  {
    id: 2,
    heading: "Band Score Predictions",
    text: "Know where you stand before the actual test.",
    image: icon2,
  },
  {
    id: 3,
    heading: "Improvement Strategies",
    text: "Targeted exercises to boost weak areas.",
    image: icon3,
  },
];

export default function SpeakingWriting(){
    return (
            <div className="speaking-and-writing">
                <div className="heading-and-text">
                  <h2>Speaking & Writing Assessment Sheets</h2>
                  <p>
                    Track your progress, predict your band score, and improve with
                    expert feedback.
                  </p>
                </div>
                <div className="cards">
                  {speakingCards.map((content) => (
                    <div className={`card Card${content.id}`} key={content.id}>
                      <div className={`image${content.id} image`}>
                        <img alt="content" src={content.image} />
                      </div>
                      <div className="inner-div">
                        <div className="heading-and-text">
                          <h5 className="heading">{content.heading}</h5>
                          <p className="text">{content.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
    )
}