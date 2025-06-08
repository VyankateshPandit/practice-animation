import React from "react";
import img from "../../../assets/eventWebinarImg1.svg";
import { useRef } from "react";
import ArrowLeft from "../../../assets/arrowleft.svg";
import ArrowRight from "../../../assets/arrowright.svg";
import "./Event.css";

function LiveSession(){

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

  const liveSessionData = [
    {
        id: 1,
        image: img,
        heading: "IELTS Webinars & Live Sessions",
        subHeading: "4117 Oberbrunner Roads . 15th May",
    },
    {
        id: 2,
        image: img,
        heading: "Study Abroad Seminars",
        subHeading: "4117 Oberbrunner Roads . 15th May",
    },
    {
        id: 3,
        image: img,
        heading: "Study Abroad Seminars",
        subHeading: "4117 Oberbrunner Roads . 15th May",
    },
    {
        id: 4,
        image: img,
        heading: "Study Abroad Seminars",
        subHeading: "4117 Oberbrunner Roads . 15th May",
    },
  ]

    return (
        <div className="live-session inline-flex py-[36px] px-[16px] flex-col items-center gap-5 w-full">
            <div className="head-text flex w-full flex-col items-start gap-2">
                <h2 className="self-stretch text-center font-walsheimTrail text-2xl non-italic font-bold leading-[32px]">
                    Upcoming Events
                </h2>
                <p className="text-center font-inter text-base non-italic font-normal leading-[24px]">
                    Join our live sessions and experience learning from our Elite Mentors 
                </p>
            </div>
            
            <div ref={scrollRef} className="wrapper flex w-full flex-col justify-center items-start gap-5 overflow-x-auto">
                <div className="live-session-cards flex items-center gap-4">
                    {
                        liveSessionData.map((components, index) =>{
                            return <div key= {index} className={`live-session-card live-session-card${components.id} flex p-4 w-[287px] flex-col items-start justify-between gap-3 self-stretch rounded-[12px]`}>
                                <img src={components.image} alt="live-session-img" className="flex h-[308px] p-6 justify-center items-center self-stretch rounded-[16px]"/>
                                <div className="content flex flex-col items-start gap-2 self-stretch">
                                    <p className="self-stretch font-inter text-sm non-italic font-medium leading-5 text-center text-[#767676]">
                                        {components.subHeading}
                                    </p>
                                    <h2 className="flex-1 text-[#101828] font-inter text-xl non-italic font-bold leading-[30px] text-center self-stretch">
                                        {components.heading}
                                    </h2>
                                </div>
                                <button type="button" className="live-session-btn flex py-[8px] px-[14px] justify-center items-center gap-[10px] self-stretch rounded-[6px] bg-[#323232] text-[#FEFEFE] font-inter font-xs non-italic font-bold leading-[20px]">
                                    Book A Slot Now
                                </button>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="arrow-wrapper flex items-start gap-5">
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

export default LiveSession;