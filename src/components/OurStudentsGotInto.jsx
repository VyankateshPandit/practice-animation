import React from "react";
import { useState } from "react";
import "./OurStudentsGotInto.css";
import img from "../../assets/ourJourneyImg.svg";

export default function OurStudentsGotInto(){
    const [rotateCircle, setRotation] = useState(0);

    function rorateNext(){
        setRotation(prev => Math.min(prev+16, 0));
    }

    function roratePrev(){
        setRotation(prev => Math.max(prev-16, -96));
    }

    return (
        <div className="our-journey-container relative flex w-full py-[36px] px-4 flex-col items-center gap-5 bg-[#FFF]">
            <div className="head-text flex w-full flex-col items-start gap-2">
                <h2 className="self-stretch text-[#323232] text-center font-inter text-xl non-italic font-bold leading-[30px]">Our Journey</h2>
                <p className="self-stretch text-[#5B5B5B] text-center font-inter text-base non-italic font-medium leading-6">What started as a small initiative to guide students has grown into one of India’s most trusted names in international test prep. Here’s a look at how far we’ve come:</p>
            </div>
            <div className="journey flex w-full p-4 flex-col items-center gap-4 border-2 h-[540px]">
                <img src={img} alt="journey-img" className="flex items-center self-stretch rounded[8px]"/>
                
                <div className="text-and-animation flex flex-col items-center gap-2 self-stretch overflow-hidden relative">
                    <div className="journey-head-text flex flex-col items-center gap-2 self-stretch">
                        <div className="flex flex-col items-start self-stretch">
                            <h2 className="self-stretch text-[#D62D31] text-center font-gt text-2xl non-italic font-extrabold leading-8">
                                2024 & Beyond
                            </h2>
                            <h3 className="self-stretch text-[#323232] text-center font-inter font-l non-italic font-bold leading-7">
                                Global Growth & Innovation
                            </h3>
                        </div>
                        <p className="self-stretch text-[#5B5B5B] text-center font-inter text-base non-italic font-normal leading-6">
                            We continue to evolve with new centers, tech-driven learning, and a goal to empower every aspiring global citizen.
                        </p>
                    </div>

                    <p className="dot w-[7px] h-[7px] bg-black rounded-full relative top-[32px] z-[1] text-white">.</p>

                    <div>
                        <div 
                            style={{transform: `rotate(${rotateCircle}deg)`, transition: "transform 1s ease-in-out"}}
                            className="our-journey w-[400px] h-[400px] border-5 border-black relative top-[5%] rounded-full"
                        >
                            <div className="m relative">
                                <p style={{"--i":0}} className="p1">2024</p>
                                <p style={{"--i":1}} className="p2">2020</p>
                                <p style={{"--i":2}} className="p3">2018</p>
                                <p style={{"--i":3}} className="p4">2013</p>
                                <p style={{"--i":4}} className="p5">2008</p>
                                <p style={{"--i":5}} className="p6">2002</p>
                                <p style={{"--i":6}} className="p7">1987</p>
                            </div>
                            <div className="w-[390px] h-[390px] rounded-full absolute top-[4px] left-[5px] bg-white  flex items-center justify-center">
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                    <div className="btn-wrapper inline-flex items-start gap-3 absolute top-[82%]">
                        <button 
                            type="button" 
                            onClick={rorateNext} 
                            className=" w-[48px] h-[48px] flex justify-center items-center gap-3 rounded-full border border-[#F0F0F0] bg-[#FEFEFE] backdrop-blur-sm"
                        >
                            <svg className=" w-[20px] h-[20px] flex-shrink-0" xmlns="http://www.w3.org/2000/svg" style={{stroke: rotateCircle<0 ? "#767676":"#DADADA", transition: "stroke 1s ease-in-out"}} width="20" height="20" viewBox="0 0 20 20">
                                <path d="M15.8327 9.99996H4.16602M4.16602 9.99996L9.99935 15.8333M4.16602 9.99996L9.99935 4.16663" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>

                        <button 
                            type="button" 
                            onClick={roratePrev} 
                            className=" w-[48px] h-[48px] flex justify-center items-center gap-3 rounded-full border border-[#F0F0F0] bg-[#FEFEFE] backdrop-blur-sm"
                        >
                            <svg className="w-[20px] h-[20px] flex-shrink-0" xmlns="http://www.w3.org/2000/svg" style={{stroke: rotateCircle>"-96" ? "#767676":"#DADADA", transition: "stroke 1s ease-in-out"}} width="20" height="20" viewBox="0 0 20 20">
                                <path d="M4.16602 9.99996H15.8327M15.8327 9.99996L9.99935 4.16663M15.8327 9.99996L9.99935 15.8333" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>    
                        </button>    
                    </div>
                </div>
            </div>
        </div>
    )
}