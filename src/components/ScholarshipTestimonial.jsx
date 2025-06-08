import React, { useRef } from 'react';
import RupeeIcon from '../../assets/rupeeIcon.svg';
import GroupIcon from '../../assets/Group 5.svg';

const ScholarshipTestimonial = () => {
  const data = {
    title: "Affordable Dreams with Merit & Government Support",
    description:
      "Canada’s scholarships, jobs, and co-op programs ease the financial burden for international students.",
    scholarships: [
      {
        name: "Vanier Canada Graduate Scholarships",
        description:
          "Awarded to students with exceptional academic achievements and leadership skills. One of the most competitive government-funded scholarships.",
        amount: "Up to CAD $50K/year (3 years)",
        level: "PhD students",
      },
      {
        name: "Ontario Graduate Scholarship (OGS)",
        description:
          "Offered to students participating in graduate studies with excellent academic performance.",
        amount: "—",
        level: "Masters or Doctoral",
      },
    ],
  };

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -350, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 350, behavior: 'smooth' });
  };

  return (
    <div className='w-full px-4 py-9 flex flex-col gap-5 items-center'>
      <div className='w-full  flex flex-col items-center gap-2 text-center'>
        <p className='text-[#323232] font-inter text-xl font-bold leading-[30px]'>
          {data.title}
        </p>
        <p className='text-[#5B5B5B] font-inter text-base leading-6'>
          {data.description}
        </p>
      </div>

      <div className='w-full max-w-6xl flex flex-col gap-5 no-scrollbar items-center'>
        <div
          ref={scrollRef}
          className='w-full flex gap-4 overflow-x-auto scroll-smooth no-scrollbar snap-x'
        >
          {data.scholarships.map((scholarship, index) => (
            <div
              key={index}
              className="w-[330px] flex-shrink-0 snap-start p-4 flex flex-col items-start gap-3 rounded border border-[#BAD3A8] bg-[#FAFAFA]"
            >
              <div className='flex flex-col items-start gap-2'>
                <p className="text-[#5B5B5B] font-inter text-lg font-bold leading-[30px]">
                  {scholarship.name}
                </p>
                <p className="text-[#5B5B5B] font-inter text-sm leading-5">
                  {scholarship.description}
                </p>
              </div>

              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-1'>
                  <div className='bg-[#D1E2C4] rounded-full p-[3px]'>
                    <img src={RupeeIcon} alt="Rupee Icon" />
                  </div>
                  <span className='text-sm font-bold text-[#5B5B5B]'>Amount:</span>
                  <span className='text-sm text-[#5B5B5B]'>{scholarship.amount}</span>
                </div>
                <div className='flex items-center gap-1'>
                  <div className='bg-[#ECB9CD] rounded-full p-1'>
                    <img src={GroupIcon} alt="Group Icon" />
                  </div>
                  <span className='text-sm font-bold text-[#5B5B5B]'>Level:</span>
                  <span className='text-sm text-[#5B5B5B]'>{scholarship.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='flex gap-4'>
          <button
            onClick={scrollLeft}
            className="flex w-12 h-12 justify-center items-center rounded-[28px] border border-[#F0F0F0] bg-[#FEFEFE] backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
              <path
                d="M15.8337 9.99999H4.16699M4.16699 9.99999L10.0003 15.8333M4.16699 9.99999L10.0003 4.16666"
                stroke="#767676"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="flex w-12 h-12 justify-center items-center rounded-[28px] border border-[#F0F0F0] bg-[#FEFEFE] backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
              <path
                d="M4.16699 9.99999H15.8337M15.8337 9.99999L10.0003 4.16666M15.8337 9.99999L10.0003 15.8333"
                stroke="#767676"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipTestimonial;
