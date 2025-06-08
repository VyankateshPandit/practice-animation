import React, { useRef, useEffect, useState } from 'react';
import background from "../../assets/BG.svg";
import lady from "../../assets/lady_img.png";
import ribbons from "../../assets/Ribbons.svg";
import left from "../../assets/arrowleft.svg";
import right from "../../assets/arrowright.svg";
import badge from "../../assets/trainerCarouselBadge.svg";

  const TrainerCarousel = () => {
    const scrollRef = useRef();
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollLeft = () => {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    useEffect(() =>{
      function handleScroll(){
        setScrollPosition(scrollRef.current.scrollLeft);
      }

      if (scrollRef.current){
        scrollRef.current.addEventListener("scroll", handleScroll);
      }

      return () =>{
        if (scrollRef.current){
          scrollRef.current.removeEventListener("scroll", handleScroll);
        }
      };
    },[]);
    

    return (
      <div className="flex flex-col items-start gap-3 w-full px-4 py-9 bg-[#FAFAFA] sm:px-4 md:px-12 lg:px-16 xl:px-20 max-w-[1440px] mx-auto text-center">
        {/* Headings */}
        <div className="flex flex-col items-start gap-4 w-full ">
          <p className="text-[#323232] font-inter text-[20px] font-bold leading-[30px] sm:text-[20px] sm:leading-[30px] md:text-[24px] md:leading-[34px] text-center self-stretch">
            Meet Our Expert Trainers
          </p>
          <p className="text-[#5B5B5B] font-inter text-[14px] font-normal leading-[20px]  md:text-[16px] md:leading-[24px] text-center self-stretch">
            Learn from certified IELTS mentors with proven track records.
          </p>
        </div> 

        {/* Trainer Carousel */}
  <div className="w-full flex-col justify-center items-center gap-4 self-stretch">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto overflow-visible scroll-smooth hide-scrollbar pt-[50px]"
      >

      {[1, 2, 3, 4].map((_, index) => (
        <div
          key={index}
          className=" flex-shrink-0 flex flex-col items-center rounded-lg shadow-md w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] xl:w-[300px] transition-all relative bottom-[7px]"
        >
          {/* Background */}
          <img
            src={background}
            alt="Background pattern"
            className="w-full h-[120px]  xs:h-[80px] -mt-4 rounded-tl-[9px] rounded-tr-[8px] rounded-br-none rounded-bl-none object-cover"
          />

          {/* Lady image */}
          <img
            src={lady}
            alt="Trainer"
            className="absolute left-1/2 transform -translate-x-1/2 z-10"
            style={{
              bottom: '48.5%',       
              width: '120.806px',
              height: '155px',
              objectFit: 'cover',
              flexShrink: 0,
            }}
          />

          {/* Badge */}
          <div className=" top-[-20px] left-[8%] right-1/3 transform -translate-x-1/3 w-[55px] h-[55px] flex-shrink-0 z-20 relative sm:w-[90.229px] sm:h-[75.229px]">
            

       {/* Badge image */}
          <img
            src={badge}
            alt="Badge"
            className="w-full h-full flex-shrink-0 absolute"
          />
        </div>

          {/* Text */}
          <div className="text-center relative bottom-[8%]">
            <p className="text-base leading-[20px] font-semibold text-black">Neha Sharma</p>
            <p className="text-sm  text-gray-600">Specializes in Speaking</p>
          </div>
        </div>
      ))}
    </div>


          {/* Arrow Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={scrollLeft}
              className="bg-white p-2 rounded-full shadow hover:scale-105 transition"
            >
              <svg className=" w-[20px] h-[20px] flex-shrink-0" xmlns="http://www.w3.org/2000/svg" style={{stroke: scrollPosition==0 ? "#DADADA":"#767676", transition: "stroke 1s ease-in-out"}} width="20" height="20" viewBox="0 0 20 20">
                  <path d="M15.8327 9.99996H4.16602M4.16602 9.99996L9.99935 15.8333M4.16602 9.99996L9.99935 4.16663" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="bg-white p-2 rounded-full shadow hover:scale-105 transition"
            >
              <svg className="w-[20px] h-[20px] flex-shrink-0" xmlns="http://www.w3.org/2000/svg" style={{stroke: scrollPosition<414 ? "#767676":"#DADADA", transition: "stroke 1s ease-in-out"}} width="20" height="20" viewBox="0 0 20 20">
                  <path d="M4.16602 9.99996H15.8327M15.8327 9.99996L9.99935 4.16663M15.8327 9.99996L9.99935 15.8333" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>  
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default TrainerCarousel;
