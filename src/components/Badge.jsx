import React from "react";
import "./Badge.css";
import badge1 from "../../assets/Badges.svg";
import badge2 from "../../assets/Badge2.svg";
import badge3 from "../../assets/Badge3.svg";
import badge4 from "../../assets/Badge4.svg";
import badge5 from "../../assets/Badge5.svg";
import badge6 from "../../assets/Badge6.svg";

export default function Badge(){
    return (
        <div className="section8">
        <div className="heading-and-text">
          <h1 className="heading">Meet Our IELTS Achievers</h1>
          <p className="text">
            Join thousands of Band 7+ achievers with EEC Global’s expert
            training and proven strategies.
          </p>
        </div>
        <div className="images">
          <div className="scrolling-images">
            <div className="imgs list1">
              <img src={badge1} alt="het patel" />
              <img src={badge2} alt="het patel" />
              <img src={badge3} alt="het patel" />
              <img src={badge4} alt="het patel" />
              <img src={badge5} alt="het patel" />
              <img src={badge6} alt="het patel" />
              <img src={badge1} alt="het patel" />
              <img src={badge2} alt="het patel" />
              <img src={badge3} alt="het patel" />
              <img src={badge4} alt="het patel" />
              <img src={badge5} alt="het patel" />
              <img src={badge6} alt="het patel" />
            </div>
          </div>
          <div className="scrolling-images">
            <div className="imgs list2">
              <img src={badge1} alt="het patel" />
              <img src={badge2} alt="het patel" />
              <img src={badge3} alt="het patel" />
              <img src={badge4} alt="het patel" />
              <img src={badge5} alt="het patel" />
              <img src={badge6} alt="het patel" />
              <img src={badge1} alt="het patel" />
              <img src={badge2} alt="het patel" />
              <img src={badge3} alt="het patel" />
              <img src={badge4} alt="het patel" />
              <img src={badge5} alt="het patel" />
              <img src={badge6} alt="het patel" />
            </div>
          </div>
        </div>
      </div>
    )
}