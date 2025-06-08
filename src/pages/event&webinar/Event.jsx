import React from "react";
import "./Event.css";
import HeroBanner from "../../components/HeroBanner";
import headerImage from "../../../assets/headerImage.svg";
import subtract from "../../../assets/subtract.svg";
import subtract2 from "../../../assets/Subtract2.svg";
import LiveSession from "./LiveSession";
import Form from "../../components/Form";
import Bootcamp from "../../components/Bootcamp";
import TestimonialSection from "../../components/TestimonialSection";
import Card from "../../components/Card";
import Testimonial from "./Testimonial";
import CountryTab from "../../components/CountryTab";
import Nav from "../../components/Nav";
import BottomNav from "../../components/BottomNav";

function Event(){
    const eventImages = [headerImage, subtract, subtract2];

    return (
        <div className="event-webinar">
            <Nav />
            <HeroBanner 
                heading="See What Our Study Abroad Seminars Has To Offer "
                subHeading="Join our study abroad seminars"
                images = {eventImages}
            />
            <LiveSession />
            
            <CountryTab 
                heading="Join Our Study Abroad Seminars"
                subHeading="Join our live sessions and experience learning from our Elite Mentors"
            />

            <div className="flex flex-col justify-center items-start gap-4 w-full px-4 py-9">
                <Card subHeading="Address • 18 April, 2025" heading="Study MS & Ph.D. Abroad: Seminar with Professor Ankur " id="1" />
                <Card subHeading="Address • 18 April, 2025" heading="Under Grads: Visa Preparations & College Selection " id="2" />
                <Card subHeading="Address • 18 April, 2025" heading="Under Grads: Seminar on Under Graduate Admissions Process" id="3" />
            </div>
            
            <Bootcamp 
                heading = "University Meets & Admission Fairs"
                subHeading = "Join our sessions for exam & visa preparation workshops"
            />

            <Testimonial />
            <TestimonialSection
                sectionTitle=" Real Stories & Real Success From Our Students"
                sectionDescription="Our Students have shared how EEC Global has helped them and
                transformed their dreams to study abroad."
            />
            <Form 
                heading="Join Our Live Grammar Webinar" 
                subHeading="Join our expert-led live sessions and get your doubts solved instantly."
                showMessage = {false}
                showReminder = {true}
                button = "Reserve My Spot"
            />
        </div>
    )
}

export default Event;