import React from "react";
import "./Event.css";
import img1 from "../../../assets/eventWebinarImg1.svg";
import img2 from "../../../assets/eventWebinarImg2.svg";
import img3 from "../../../assets/eventWebinarImg3.svg";
import { useRef } from "react";
import ArrowLeft from "../../../assets/arrowleft.svg";
import ArrowRight from "../../../assets/arrowright.svg";

export default function Testimonial(){
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
        <div className="testimonial flex w-full py-9 px-4 flex-col items-start gap-5">
            <div className="head-text flex w-full flex-col items-start gap-2">
                <h2 className="self-stretch text-[#323232] text-center font-inter text-xl non-italic font-bold leading-[30px]">Event Gallery</h2>
                <p className="self-stretch text-[#5B5B5B] text-center font-inter text-base non-italic font-normal leading-[24px]">Catch a glimpse of our university expo events</p>
            </div>

            <div className="testi-images w-full h-[262px] overflow-hidden">
                <div ref={scrollRef} className="event-scrolling-images flex gap-2 overflow-x-auto h-full">
                    <img src={img1} alt="scrolling-images"/>
                    <img src={img2} alt="scrolling-images"/>
                    <img src={img3} alt="scrolling-images"/>
                </div>
            </div>
            
            <div className="arrow-wrapper flex items-start gap-5 justify-center self-stretch">
                <button type="button" onClick={() => scroll("left")} className="flex w-[48px] h-[48px] justify-center items-center gap-3 rounded-[28px]">
                    <img
                        src={ArrowLeft}
                        alt="left"
                        className="Arrow"
                        tabIndex={-1}
                    />
                </button>

                <button type="button" onClick={() => scroll("right")} className="flex w-[48px] h-[48px] justify-center items-center gap-3 rounded-[28px]">
                    <img
                        src={ArrowRight}
                        alt="right"
                        className="Arrow"
                        tabIndex={-1}
                    />
                </button>
            </div>
        </div>
    )
}