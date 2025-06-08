import React from "react";
import "./socialProof.css";
import img1 from "../../assets/socialProofImg1.svg";
import img2 from "../../assets/socialProofImg2.svg";
import badge1 from "../../assets/Badge807.svg";
import badge2 from "../../assets/Badge981.svg";

const data =[
    {
        image: img1,
        badgeImage: badge1,
        heading: "Neha Sharma",
        subHeading: "June 2025",
    },
    {
        image: img2,
        badgeImage: badge2,
        heading: "Vanshi Raj",
        subHeading: "May 2025",
    },
    {
        image: img1,
        badgeImage: badge1,
        heading: "Vanshi Raj",
        subHeading: "May 2025",
    },
    {
        image: img2,
        badgeImage: badge2,
        heading: "Vanshi Raj",
        subHeading: "May 2025",
    },
];

export default function SocialProof(){
    return (
        <div className="social-proof flex w-full py-9 px-4 flex-col items-start gap-5 b-[#FAFAFA]">
            <div className="head-text flex w-full flex-col items-start gap-2">
                <h2 className="self-stretch text-[#323232] text-center font-inter text-xl non-italic font-bold leading-[30px]">
                    Our Top Students
                </h2>
                <p className="self-stretch text-[#5B5B5B] text-center font-inter text-base non-italic font-normal leading-6">
                    Our students have excelled in prestigious examinations throughout India.
                </p>
            </div>
            <div className="social-proof-carousal flex py-5 justify-between items-center self-stretch overflow-x-auto" style={{scrollbarWidth: "none"}}>
                <div className="flex gap-4 items-center">
                    {
                        data.map((compo, index) =>{
                            return <div 
                                        className={`social-proof-card relative social-proof-card${index} flex w-[192px] p-4 flex-col items-start gap-4 rounded-[16px] border-2`} 
                                        key={index}
                                    >
                                        <div className="inner-social-proof-card flex flex-col items-center gap-4">
                                            <div className="image">
                                                <img src={compo.badgeImage} className="absolute top-[-8%] left-[60%]"/>
                                            </div>
                                            <div className="content flex flex-col items-start">
                                                <h2 className="self-stretch text-[#323232] text-center font-inter text-base non-italic font-bold leading-6">{compo.heading}</h2>
                                                <p className="self-stretch text-[#5B5B5B] text-center font-inter text-sm non-italic font-medium leading-5">{compo.subHeading}</p>
                                            </div>
                                    </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}