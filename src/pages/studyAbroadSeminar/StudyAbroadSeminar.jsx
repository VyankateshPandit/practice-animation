import React from "react";
import "./StudyAbroadSeminar.css";
import HeroBanner from "../../components/HeroBanner.jsx";
import img1 from "../../../assets/heroBannerImg1.svg";
import img2 from "../../../assets/heroBannerImg2.svg";
import img3 from "../../../assets/heroBannerImg3.svg";
import Bootcamp from "../../components/Bootcamp.jsx";
import Form from "../../components/Form.jsx";
import CountryTab from "../../components/CountryTab.jsx";
import Card from "../../components/Card.jsx";
import Nav from "../../components/Nav.jsx";

function StudyAbroadSeminar(){
    const studyImages = [img1, img2, img3];

    return (
        <div className="study-abroad-seminar">
            <Nav />
            <HeroBanner 
                heading = "Start your journey to your dream destination!"
                subHeading= "Get detailed insights about studying in countries like the USA, Canada, UK, Australia, and Germany. Know about university options, tuition fees, scholarships, and life abroad from experienced counselors."    
                images = {studyImages}
            />

            <CountryTab 
                heading="Join Our Study Abroad Seminars"
                subHeading="Join our live sessions and experience learning from our Elite Mentors"
                bgColor= "#FFF"
            />

            <div className="flex flex-col justify-center items-start gap-4 w-full px-4 py-9">
                <Card subHeading="7209 Skiles Ways •  2th May, 4PM" heading="USA : How to Crack Ivy League Admissions" id="1" />
                <Card subHeading="67235 Rempel Glen • 6th May, 2PM" heading="Canada : PR Pathways After Graduation" id="2" />
                <Card subHeading="44729 Rowan Divide • 10th May, 5PM" heading="USA : Post-Study Work Visa Explained" id="3" />
                <Card subHeading="44729 Rowan Divide • 10th May, 5PM" heading="Germany : Free Education & Language Prep" id="4" />
            </div>
                        
            <Bootcamp heading="Join Our Upcoming Live Sessions" subHeading="Connect with our expert counsellors to gain valuable insights and get ready for your dream destination!"/>
            
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

export default StudyAbroadSeminar;