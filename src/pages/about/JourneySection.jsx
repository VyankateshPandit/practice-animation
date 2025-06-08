import React, { useState } from 'react';

const timelineData = [
  { year: '1997', title: '1997', subtitle: 'The Beginning', description: 'It all started with a mission to guide students on the right path.' },
  { year: '2002', title: '2002', subtitle: 'First Milestone', description: 'EEC expanded with new centers and started gaining traction.' },
  { year: '2008', title: '2008', subtitle: 'National Presence', description: 'We became a trusted name across the country.' },
  { year: '2013', title: '2013', subtitle: 'Digital Integration', description: 'Launched online learning platforms to reach more students.' },
  { year: '2018', title: '2018', subtitle: 'Community Impact', description: 'Thousands of success stories emerged as we grew.' },
  { year: '2020', title: '2020', subtitle: 'Resilience & Adaptation', description: 'Adapted to global challenges and remote learning.' },
  { year: '2024', title: '2024 & Beyond', subtitle: 'Global Growth & Innovation', description: 'We continue to evolve with tech-driven learning and global reach.' },
];

const yearStyles = [
  { left: 303.96, top: 291.82, rotate: 139 },
  { left: 339.20, top: 234.54, rotate: 117 },
  { left: 349.26, top: 165.81, rotate: 94 },
  { left: 331.11, top: 97.18, rotate: 70 },
  { left: 289.82, top: 45.03, rotate: 49 },
  { left: 226.61, top: 9.56, rotate: 24 },
  { left: 157, top: 2, rotate: 0 },
];

const JourneySection = () => {
  const [currentIndex, setCurrentIndex] = useState(timelineData.length - 1);

  const handleNavigation = (direction) => {
    setCurrentIndex((prev) => {
      if (direction === 'left') {
        return prev > 0 ? prev - 1 : prev; // go backward
      } else {
        return prev < timelineData.length - 1 ? prev + 1 : prev; // go forward
      }
    });
  };

  return (
    <div className="flex flex-col items-center gap-5 px-4 py-9 md:px-8">
      <div className="w-full flex flex-col items-start gap-2 md:items-center">
        <div className="text-center text-[#323232] text-xl font-bold leading-[30px] w-full font-inter">Our Journey</div>
        <div className="text-center text-[#5B5B5B] text-base font-normal leading-6 w-full font-inter">
          What started as a small initiative to guide students has grown into one of India’s most trusted names in international test prep. Here’s a look at how far we’ve come:
        </div>
      </div>

      <div className="w-[98%] max-w-full p-4 bg-[#FEFEFE] shadow-inner rounded-xl outline outline-2 outline-[#0E0725] flex flex-col items-center gap-4 overflow-hidden box-border">
        <div className="w-full h-[150px] relative rounded-lg bg-center bg-cover" style={{ backgroundImage: "url('../../../assets/Journey-image.png')" }}>
          <div className="w-[222px] h-[150px] absolute left-0 top-0" />
        </div>

        <div className="w-full flex flex-col items-start gap-0.5">
          <div className="w-full flex flex-col items-center gap-2">
            <div className="w-full text-center text-[#D62D31] text-2xl font-extrabold leading-8 font-sans">{timelineData[currentIndex].title}</div>
            <div className="w-full text-center text-[#323232] text-lg font-bold leading-7 font-inter">{timelineData[currentIndex].subtitle}</div>
          </div>
          <div className="w-full text-center text-[#5B5B5B] text-base font-normal leading-6 font-inter">
            {timelineData[currentIndex].description}
          </div>
        </div>

        <div className="relative w-[368px] h-[160px] mt-2">
          <div className="absolute left-[130px] top-[112px] flex gap-3 z-10">
            <button
              onClick={() => handleNavigation('left')}
              disabled={currentIndex === 0}
              className="w-12 h-12 bg-[#FEFEFE] rounded-full border border-[#F0F0F0] backdrop-blur-sm flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="stroke-current"
                style={{ stroke: currentIndex === 0 ? '#DADADA' : '#767676' }}
              >
                <path d="M15.8327 10H4.16602M4.16602 10L9.99935 15.8333M4.16602 10L9.99935 4.16663" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => handleNavigation('right')}
              disabled={currentIndex === timelineData.length - 1}
              className="w-12 h-12 bg-[#FEFEFE] rounded-full border border-[#F0F0F0] backdrop-blur-sm flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="stroke-current"
                style={{ stroke: currentIndex === timelineData.length - 1 ? '#DADADA' : '#767676' }}
              >
                <path d="M4.16602 10H15.8327M15.8327 10L9.99935 4.16663M15.8327 10L9.99935 15.8333" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Timeline graphic */}
          <div className="absolute left-[9px] top-[4px] w-[350px] h-[350px]">
            <div className="absolute left-[25px] top-[26px] w-[300px] h-[298px] rounded-full outline outline-[3px] outline-[#0E0725]" />
            <div className="absolute w-[350px] h-[350px] rounded-full" />
            <div
              className="absolute w-full h-full"
              style={{ transform: `rotate(-${yearStyles[currentIndex].rotate}deg)`, transition: 'transform 0.4s ease-in-out' }}
            >
              {timelineData.map((item, index) => {
                const { left, top, rotate } = yearStyles[index];
                return (
                  <div
                    key={item.year}
                    className={`absolute flex justify-center items-center ${currentIndex === index ? 'font-bold text-[#323232]' : 'font-normal text-[#5B5B5B]'} text-sm`}
                    style={{ width: 37, height: 22, left, top, transform: `rotate(${rotate}deg)`, transformOrigin: 'top left' }}
                  >
                    <div className="absolute w-full top-0 left-0 text-center">{item.year}</div>
                  </div>
                );
              })}
            </div>
            <div className="absolute left-[180px] top-[25px] w-2 h-2 bg-[#323232] rounded-full z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;
