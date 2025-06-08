import React from "react";
import Membership from "../components/Membership";
import PostGrad from "../components/PostGrad";
import ScholarshipTestimonial from "../components/ScholarshipTestimonial";
import SocialProof from "../components/SocialProof";
import SpecialBatch from "../components/SpecialBatch";
import TrainerCarousel from "../components/trainerCorousel";
import TransparentFeeOptions from "../components/TransparentFeeOptions";
import WhyStudyAbroad from "../components/WhyStudyAbroad";

export default function EecComponents(){
    return(
        <div className="w-full flex flex-col gap-4 text-center">
            <h2>Component 1</h2>
            <TransparentFeeOptions />    

            <h2>Component 2</h2>
            <Membership />

            <h2>Component 3</h2>
            <WhyStudyAbroad />

            <h2>Component 4</h2>   
            <ScholarshipTestimonial />

            <h2>Component 5</h2>
            <PostGrad />

            <h2>Component 6</h2>
            <SpecialBatch />

            <h2>Component 7</h2>
            <TrainerCarousel />

            <h2>Component 8</h2>
            <SocialProof />     
       </div>
    )
}