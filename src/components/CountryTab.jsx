import React from "react";
import australiaFlag from "../../assets/australiaFlag.svg";
import ukFlag from "../../assets/ukFlags.svg";
import usaFlag from "../../assets/usaFlag.svg";
import netherlandFlag from "../../assets/netherlandFlag.svg";
import canadaFlag from "../../assets/canadaFlag.svg";
import gremanyFlag from "../../assets/germanyFlag.svg";
import "./CountryTab.css";

export default function CountryTab(props){
    const countryTab = [
        {
            flag: australiaFlag,
            countryName: "Australia",
        },
        {
            flag: canadaFlag,
            countryName: "Canada",
        },
        {
            flag: usaFlag,
            countryName: "USA",
        },
        {
            flag: netherlandFlag,
            countryName: "Netherland",
        },
        {
            flag: gremanyFlag,
            countryName: "Germany",
        },
        {
            flag: ukFlag,
            countryName: "UK",
        },
    ];

    return (
        <div className="country-tab-container flex w-full py-9 px-4 flex-col items-start gap-5 bg-[#FEFEFE]">
            <div className="head-text flex w-full flex-col items-start gap-2">
                <h2 className="self-stretch text-[#323232] text-center font-inter text-xl non-italic font-bold leading-[30px]">
                    {props.heading}
                </h2>
                <p className="self-stretch text-[#5B5B5B] text-center font-inter text-base non-italic font-normal leading-6">
                     {props.subHeading}
                </p>
            </div>

            <div className="country-tab flex w-full justify-center items-start content-start gap-4 flex-wrap">
                {
                    countryTab.map((component, index) =>{
                        return <div className={`tab tab${index} py-[4px] pr-[10px] pl-[8px] flex justify-center items-center gap-[6px] rounded-[8px] border border-[#F0F0F0] backdrop-blur-[20px]`} style={{background: props.bgColor}} key={index}>
                            <div className="flag flex w-8 h-8 py-[2.347px] justify-center items-center">
                                <img src={component.flag} alt="flag"/>
                            </div>
                            <p className="text-[#5B5B5B] text-center font-inter text-base font-medium leading-6">{component.countryName}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}