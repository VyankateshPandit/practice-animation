import React from "react";
import LoaImg from "../../assets/LoaImg.svg";
import "./LoaContainer.css";
import { useRef, useState, useEffect } from "react";

const data = [
    {
        heading: "Get Letter of Acceptance (LOA)",
        subHeading: "To study in Canada, secure an admission offer from a Designated Learning Institution (DLI) and ensure your program qualifies for a Post-Graduation Work Permit (PGWP).",
    },
    {
        heading: "Pay Tuition & Purchase GIC",
        subHeading: "To study in Canada, pay your first-year tuition fees (proof required) and purchase a CAD $10,000 Guaranteed Investment Certificate (GIC) from a Canadian bank like Scotia, ICICI, or SBI Canada to cover living expenses.",
    },
    {
        heading: "Prepare Visa Documents",
        subHeading: "To apply for a Canadian study permit, you need a valid passport, a Letter of Acceptance (LOA) from a university or college, a fee payment receipt, a GIC certificate, an IELTS scorecard (minimum 6.0 in each section for SDS), academic transcripts, and a Statement of Purpose (SOP).",
    },
    {
        heading: "Apply for SDS Visa Online",
        subHeading: "To apply for a Canadian study permit, submit your application through the IRCC portal under the SDS stream, upload biometrics, medical test results, and other required documents, and pay the visa application fee (approximately CAD $150).",
    },
    {
        heading: "Receive Your Study Permit",
        subHeading: "For Canadian study permit applications under the SDS stream, expect a visa processing time of 4–6 weeks, after which you will receive a Port of Entry Letter of Introduction and Study Permit Approval.",
    },
];

export default function LoaContainer(){
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        if (!contentRef.current) return;

        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                setContentHeight(entry.contentRect.height);
            }
        });

        observer.observe(contentRef.current);

        return () => {
            if (contentRef.current) observer.unobserve(contentRef.current);
        };
    }, []);

    return (
        <div className="loa-container flex w-full py-9 px-4 flex-col justify-center items-center gap-5 bg-[#FEFEFE]">
            <div className="feature-section-content flex w-full flex-col items-start gap-2">
                <h2 className="self-stretch text-[#323232] text-center font-inter text-xl non-italic font-bold leading-[30px]">
                    Step-by-Step Study Permit Guide
                </h2>
                <p className="self-stretch text-[#5B5B5B] text-center font-inter text-base non-italic font-normal leading-6">
                    Canada offers one of the most student-friendly visa processes, especially under the SDS (Student Direct Stream) for Indian students. Here’s how we help you get there:
                </p>
            </div>
            <div className="canada-process flex w-full justify-end items-start gap-4">
                <div style={{ height: contentHeight }}>
                    <img src={LoaImg} alt="loa-img" className="h-full object-contain"/>
                </div>

                <div ref={contentRef} className="content flex py-2 flex-col items-start gap-6 flex-1">
                    {
                        data.map((component, index) => {
                            return <div className={`content-card content-card${index} flex w-full flex-col items-start gap-4`} key={index}>
                                <h2 className="self-stretch text-[#5B5B5B] font-inter text-[18px] non-italic font-medium leading-7">{component.heading}</h2>
                                <p className="self-stretch text-[#5B5B5B] font-inter text-sm non-italic font-normal leading-5">{component.subHeading}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}