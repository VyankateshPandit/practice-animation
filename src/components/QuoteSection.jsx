import React from "react";
import "./QuoteSection.css";
import testiImg1 from "../../assets/TestimonialImage1.svg";
import testiImg2 from "../../assets/TestimonialImage2.svg";
import testiImg3 from "../../assets/TestimonialImage3.svg";
import { useRef } from "react";
import ArrowLeft from "../../assets/arrowleft.svg";
import ArrowRight from "../../assets/arrowright.svg";

export default function QuoteSection() {
    
    const scrollRef = useRef(null);
    const scroll = (direction) => {
    const scrollAmount = 300; // Adjust based on your card width
    if (scrollRef.current) {
        scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
        });
    }
    };
    
    return (
        <div className="section5">
            <div className="heading-and-text">
                <h1 className="heading">Extensive Library & Study Resources</h1>
                <p className="text">
                Gain unlimited library access with 13 expert-curated books, video
                lectures, and digital notes for in-depth IELTS preparation—learn
                anytime, anywhere!
                </p>
            </div>
            <div className="testimonial">
                <div className="testimonial-cards" ref={scrollRef}>
                <img src={testiImg1} alt="testiImg1" />
                <img src={testiImg2} alt="testiImg2" />
                <img src={testiImg3} alt="testiImg2" />
                </div>
    
                <div className="arrow-wrapper">
                <img
                    src={ArrowLeft}
                    alt="left"
                    className="Arrow"
                    onClick={() => scroll("left")}
                    tabIndex={-1}
                />
                <img
                    src={ArrowRight}
                    alt="right"
                    className="Arrow"
                    onClick={() => scroll("right")}
                    tabIndex={-1}
                />
                </div>
            </div>
        </div>
    )
}