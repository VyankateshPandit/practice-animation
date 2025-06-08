import React from "react";

export default function PostGradCard(props){
    return (
        <div 
            style={{
                borderColor: props.id==1?"#88D1D8":props.id==2?"#FFA585":"#4557F6",
                backgroundImage: props.id==1?"linear-gradient(258deg, rgba(136, 209, 216, 0.10) 1.01%, rgba(200, 238, 241, 0.10) 99.36%)":props.id==2?"linear-gradient(270deg, rgba(255, 165, 133, 0.10) 0%, rgba(255, 237, 160, 0.10) 99.35%)":"linear-gradient(270deg, rgba(69, 87, 246, 0.10) 0%, rgba(215, 219, 255, 0.10) 99.54%)",
            }} 
            className="postgrad-card flex p-4 flex-col items-start gap-4 self-stretch rounded-[16px] border-2"
        >
            <h2 className="text-[#323232] font-gt text-2xl non-italic font-extrabold leading-8">{props.heading}</h2>
            <div className="post-grad-work flex flex-col items-start gap-2 self-stretch">
                <p className="self-stretch text-[#5B5B5B] font-inter text-sm non-italic font-normal leading-5">
                    <span className="font-bold">{props.subHeading1}: </span>
                    {props.subHeadingContent1}
                </p>
                <p className="self-stretch text-[#5B5B5B] font-inter text-sm non-italic font-normal leading-5">
                    <span className="font-bold">{props.subHeading2}: </span>
                    {props.subHeadingContent2}
                </p>
                <p className="self-stretch text-[#5B5B5B] font-inter text-sm non-italic font-normal leading-5">
                    <span className="font-bold">{props.subHeading3}: </span>
                    {props.subHeadingContent3}
                </p>
            </div>
        </div>
    )
}