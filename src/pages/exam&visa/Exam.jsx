import React from "react";
import "./Exam.css";
import HeroBanner from "../../components/HeroBanner";
import Feature from "../../components/Feature";
import Bootcamp from "../../components/Bootcamp";
import Form from "../../components/Form";
import headerImage from "../../../assets/headerImage.svg";
import subtract from "../../../assets/Subtract.svg";
import subtract2 from "../../../assets/Subtract2.svg";
import Navbar from "../../components/Navbar";
import BottomNav from "../../components/BottomNav";
import Nav from "../../components/Nav";

function Exam(){
    const examImages = [headerImage, subtract, subtract2];

    return (
        <div className="exam">
            <Nav />
            <HeroBanner 
                heading="Your Success Starts with Smart Preparation"
                subHeading="These workshops focus on your journey post-exam—from SOP writing to visa interviews. A must-attend for serious students."
                images = {examImages}
            />
            <Feature />
            <Bootcamp 
                heading = "Join Our Upcoming Live Sessions"
                subHeading = "Connect with our expert counsellors to gain valuable insights and get ready for your dream destination!"
            />
            <Form 
                heading="Join Our Whatsapp Group"
                subHeading = "Stay informed and reap the benefits of our expert-led live sessions and webinars."
                showMessage = {false}
                showReminder = {true}
                button = "Reserve My Spot"
            />
        </div>
    )
}

export default Exam;