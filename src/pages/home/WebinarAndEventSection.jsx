import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import WebinarCardInfoIcon from "../../../assets/webinar-card-info-icon.svg";
import ArrowLeft from "../../../assets/arrowleft.svg";
import ArrowRight from "../../../assets/arrowright.svg";
const eventData = [
  {
    id: 1,
    date: "18 April, 2025",
    address: "Address",
    title: "Under Grads: Seminar on Under Graduate Admissions Process",
    hasIcon: true,
  },
  {
    id: 2,
    date: "25 April, 2025",
    address: "Virtual",
    title: "Graduate Studies: How to Prepare for International Applications",
    hasIcon: true,
  },
  {
    id: 3,
    date: "3 May, 2025",
    address: "Webinar",
    title: "Scholarship Opportunities: Finding Financial Support Abroad",
    hasIcon: true,
  },
];

function EventsSection() {
  const scrollRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Calculate which card is most visible in the viewport
  const updateActiveCard = () => {
    if (!scrollRef.current || cardsRef.current.length === 0) return;

    const containerRect = scrollRef.current.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestCardIndex = 0;
    let closestDistance = Infinity;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestCardIndex = index;
      }
    });

    setActiveCardIndex(closestCardIndex);
  };

  const checkScrollability = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      updateActiveCard();
    }
  }, []);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScrollability);
      checkScrollability();
      window.addEventListener("resize", checkScrollability);

      return () => {
        scrollElement.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
      };
    }
  }, [checkScrollability]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const targetIndex =
        direction === "right"
          ? Math.min(activeCardIndex + 1, eventData.length - 1)
          : Math.max(activeCardIndex - 1, 0);

      if (cardsRef.current[targetIndex]) {
        const cardLeft = cardsRef.current[targetIndex].offsetLeft;
        const containerLeft = scrollRef.current.offsetLeft;

        scrollRef.current.scrollTo({
          left: cardLeft - containerLeft,
          behavior: "smooth",
        });

        setActiveCardIndex(targetIndex);
      }
    }
  };

  const cardVariants = {
    active: {
      scale: 1,
      opacity: 1,
      zIndex: 10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    inactive: {
      scale: 0.9,
      opacity: 0.7,
      zIndex: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <div className="flex w-full px-4 py-9 flex-col items-center justify-center gap-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-[#323232] text-center font-inter text-xl font-bold leading-[30px]">
          Don't Miss Our Upcoming Events
        </h1>
        <p className="text-[#5b5b5b] text-center font-inter text-base font-normal leading-6">
          Join live webinars, Q&A sessions, and expert panels to
          <br />
          stay ahead in your study abroad journey.
        </p>
      </div>

      <div className="w-full">
        <div
          className="flex flex-row gap-5 overflow-x-auto scrollbar-hide"
          ref={scrollRef}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {eventData.map((event, index) => (
            <motion.div
              key={event.id}
              className="flex w-full py-8 px-6 flex-col items-center gap-8 flex-shrink-0 rounded-xl border-2 border-[#88d1d8] bg-gradient-to-r from-[rgba(136,209,216,0.14)] to-[rgba(200,238,241,0.14)]"
              style={{ backdropFilter: "blur(30px)" }}
              ref={(el) => (cardsRef.current[index] = el)}
              variants={cardVariants}
              animate={activeCardIndex === index ? "active" : "inactive"}
              initial="inactive"
            >
              <div className="flex flex-col gap-2">
                <p className="text-[#767676] font-inter text-sm font-medium leading-5">
                  {event.address} • {event.date}
                </p>
                <div className="flex flex-row items-start justify-between">
                  <h2 className="flex-1 text-[#323232] font-inter text-xl font-bold leading-[30px]">
                    {event.title}
                  </h2>
                  <img src={WebinarCardInfoIcon} alt="img" />
                </div>
              </div>
              <button className="w-full bg-[#323232] text-[#fefefe] font-inter text-sm font-bold leading-5 py-2 px-3.5 rounded-md flex justify-center items-center gap-2.5">
                Book A Slot Now
              </button>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-4 gap-4">
          <motion.button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow"
            onClick={() => canScrollLeft && scroll("left")}
            whileHover={canScrollLeft ? { scale: 1.1 } : {}}
            whileTap={canScrollLeft ? { scale: 0.9 } : {}}
            animate={{ opacity: canScrollLeft ? 1 : 0.5 }}
          >
            <img src={ArrowLeft} />
          </motion.button>
          <motion.button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow"
            onClick={() => canScrollRight && scroll("right")}
            whileHover={canScrollRight ? { scale: 1.1 } : {}}
            whileTap={canScrollRight ? { scale: 0.9 } : {}}
            animate={{ opacity: canScrollRight ? 1 : 0.5 }}
          >
            <img src={ArrowRight} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default EventsSection;
