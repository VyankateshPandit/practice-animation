import React from "react";
import "./ContactUs.css";
import Header from "./Header";
import Form from "../../components/Form";
import Map from "../../components/Map";
import Students from "../../components/Students";
import BottomNav from "../../components/BottomNav";
import Navbar from "../../components/Navbar";



function ContactUs() {
    return (
        <div className="contact-us-page">
            <Navbar />
            <Header />
            <Form 
            heading="Have a Question or Need Support?" 
            subHeading="Fill out the form and our team will reach out to you within 24 hours."
            showMessage = {true}
            showReminder = {false}
            button = "Submit Inquiry"
            />
            <Map />
            <Students showName={false} />
        </div>
    )
}

export default ContactUs;