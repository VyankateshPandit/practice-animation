import React from "react";
import "../pages/studyAbroadSeminar/StudyAbroadSeminar.css";


function Card(props){
    return (
        <div className={`seminar-card seminar-card${props.id} flex w-full py-[32px] px-[24px] flex-col justify-between items-start rounded-[12px] gap-6`}>
            <div className="content flex flex-col items-start gap-2 self-stretch">
                <p className="self-stretch font-inter text-sm non-italic font-medium leading-5">
                    {props.subHeading}
                </p>
                <div className="icon-heading flex items-start self-stretch">
                    <h2 className="flex-1 font-inter text-xl non-italic font-bold">
                        {props.heading}
                    </h2>
                    <div className="icon flex pt-[2px] items-center gap-3">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                            <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
            <button type="button" className="seminar-btn flex py-[8px] px-[14px] justify-center items-center gap-[10px] self-stretch rounded-[6px] font-inter text-sm non-italic font-bold leading-5">
                Book A Slot Now
            </button>
        </div>
    )
}

export default Card;