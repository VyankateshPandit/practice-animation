import React from "react";
import "./CtaSection.css";
import poseimage from "../../assets/PoseImage.svg";

export default function CtaSection(){
    return (
        <div className="section7">
            <div className="content">
                <div className="heading-and-text">
                    <h1 className="heading">
                    Experience Before You Commit –
                    <span className="gradient-text">Attend a Free Demo Class!</span>
                    </h1>
                    <p className="text">
                    Get a firsthand experience of our expert-led sessions before
                    enrolling. Meet your trainers, explore our teaching methods, and
                    see if EEC Global is the right fit—no obligation, no pressure!
                    </p>
                </div>
                <button className="btn" type="button">
                    Book Your Free Demo Now
                </button>
                <img
                    src={poseimage}
                    alt="Demo Class Preview"
                    className="demo-image"
                />
            </div>
      </div>

    )
}