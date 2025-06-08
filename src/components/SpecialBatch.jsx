import React from 'react';
import './SpecialBatch.css';

function SpecialBatch() {
  return (
    <div className="text-center py-10 px-4 font-inter">
      <h1 className="text-[#323232] text-center font-inter text-[20px] font-bold leading-[30px] sm:text-[20px] sm:leading-[27px]">Choose Your Perfect Batch</h1>
      <p className="text-center text-[#5B5B5B] text-sm leading-[20px] font-normal font-inter w-full">
        Morning, evening, or weekends – we’ve got a batch that fits your routine.
      </p>

      <div className="relative flex justify-center items-center h-[500px]">
        {/* Top background card - up from right, rotated 45deg */}
        <div
          className="absolute bg-black text-white p-6 w-[90%] max-w-xl rounded-xl opacity-60 shadow-md"
          style={{
            top: '85px',       // up and right
            right: '35px',
            transform: 'rotate(20deg) scale(0.9)',
            zIndex: 0,
          }}
        >
          <h2 className="text-xl font-bold mb-4">Weekday Batch</h2>
          <p className="mb-2">
            <strong>Morning</strong> | 8am - 11am &nbsp;&nbsp;
            <strong>Evening</strong> | 4pm - 7pm
          </p>
          <p>
            <strong>Start Date</strong> - April 27, 2025 &nbsp;&nbsp;
            <strong>Duration</strong> - 10 weeks
          </p>
        </div>

        {/* Main card */}
        <div className="relative z-10 bg-black text-white p-6 w-[90%] max-w-xl rounded-xl shadow-lg mx-auto">
          <h2 className="text-center text-[#FEFEFE] text-[28px] sm:text-[32px] md:text-[36px] leading-[36px] sm:leading-[40px] 
              md:leading-[44px] font-extrabold font-gt w-full">Weekday Batch</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-1">
            <p className="text-center text-[#FEFEFE] text-base leading-[26px] font-extrabold font-inter">Morning | </p>
            <p className="text-center text-[#FEFEFE] text-base leading-[26px] font-medium font-inter">8am - 11am </p>
            <p className="text-center text-[#FEFEFE] text-base leading-[26px] font-extrabold font-inter">Evening | </p>
            <p className="text-center text-[#FEFEFE] text-base leading-[26px] font-medium font-inter">4pm - 7pm</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-1">
            <p className="text-center text-[#FEFEFE] text-base leading-[26px] font-extrabold font-inter">Start Date - </p> 
              <p className="text-center text-[#FEFEFE] text-base leading-[26px] font-medium font-inter">April 27, 2025 </p>
            <p className="text-center text-[#FEFEFE] text-base leading-[26px] font-extrabold font-inter">Duration  - </p>
              <p className="text-center text-[#FEFEFE] text-base leading-[26px] font-medium font-inter">10 weeks</p>
          </div>
          
          <button className="flex items-center justify-center gap-[10px] px-[14px] py-2 w-full rounded-[6px] bg-[#323232]">
            <p className="text-[#FEFEFE] text-sm leading-[22px] font-extrabold font-inter">Book Your Free Demo Now</p>
          </button>
        </div>

        {/* Bottom background card - down from right, rotated 45deg */}
        <div
          className="absolute bg-black text-white p-6 w-[95%] max-w-xl rounded-xl opacity-60 shadow-md"
          style={{
            bottom: '85px',    // down and right
            right: '12px',
            transform: 'rotate(160deg) scale(0.9)',
            zIndex: 0,
          }}
        >
          <h2 className="text-xl font-bold mb-4">Weekday Batch</h2>
          <p className="mb-2">
            <strong>Morning</strong> | 8am - 11am &nbsp;&nbsp;
            <strong>Evening</strong> | 4pm - 7pm
          </p>
          <p>
            <strong>Start Date</strong> - April 27, 2025 &nbsp;&nbsp;
            <strong>Duration</strong> - 10 weeks
          </p>
        </div>
      </div>
    </div>
  );
}

export default SpecialBatch;
