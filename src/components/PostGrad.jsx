import React from "react";
import PostGradCard from "./PostGradCard";

export default function PostGrad(){
    return (
        <div className="post-grad flex w-full py-9 px-4 flex-col justify-center items-center gap-5 bg-[#FAFAFA]">
            <div className="head-text flex w-full flex-col items-start gap-2">
                <h2 className="self-stretch text-[#323232] text-center font-inter text-lg non-italic font-bold leading-[30px]">After Study: Work & PR</h2>
                <p className="self-stretch text-[#5B5B5B] text-center font-inter text-base non-italic font-normal leading-6">With generous post-study work permits and clear PR pathways, Canada gives you the chance to turn your education into long-term settlement and career growth.</p>
            </div>
            <div className="post-grad-cards flex flex-col items-end gap-4 self-stretch">
                <PostGradCard 
                    heading = "Post-Graduation Work Permit"
                    subHeading1 = "Duration: "
                    subHeadingContent1 = "Up to 3 yrs (2+ yr programs = 3 yrs)"
                    subHeading2 = "Eligibility: "
                    subHeadingContent2 = "DLI grad, 8+ months full-time study"
                    subHeading3 = "Benefits: "
                    subHeadingContent3 = "Full-time work, PR experience, dependents on work permits."
                    id="1"
                />

                <PostGradCard 
                    heading = "Permanent Residency (PR) Pathways"
                    subHeading1 = "Express Entry: "
                    subHeadingContent1 = "CRS-based, education/work boost"
                    subHeading2 = "PNPs: "
                    subHeadingContent2 = "Province-specific PR (e.g., OINP, BC PNP)"
                    subHeading3 = "CEC: "
                    subHeadingContent3 = "PR for grads with 1+ yr Canadian work experience"
                    id="2"
                />

                <PostGradCard 
                    heading = "Job Market Highlights"
                    subHeading1 = "Demand: "
                    subHeadingContent1 = "High in IT, Data Analytics, Engineering, Finance, Healthcare"
                    subHeading2 = "Support: "
                    subHeadingContent2 = "University career services aid job placement"
                    subHeading3 = "Flexibility: "
                    subHeadingContent3 = "Work anywhere/any sector"
                    id="3"
                />
            </div>
        </div>
    )
}