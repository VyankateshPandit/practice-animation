import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./EecEdge.css";

const features = [
  {
    color: "#F57B1F",
    bg: "#FEF2E9",
    border: "#FCD6BA",
    title: "Proven Success Rates",
    description:
      "Thousands of students score 7.5+ Bands every year — with many hitting 8 and above!",
  },
  {
    color: "#1798A6",
    bg: "#E8F5F6",
    border: "#B7DFE3",
    title: "Certified Expert Trainers",
    description:
      "Our mentors are IDP & British Council certified with years of real classroom and exam experience.",
  },
  {
    color: "#C31E5D",
    bg: "#F9E9EF",
    border: "#ECB9CD",
    title: "Personalized Study Plans",
    description:
      "We tailor learning paths based on your strengths, weak areas, and target score — not just a standard curriculum.",
  },
  {
    color: "#69A042",
    bg: "#F0F6EC",
    border: "#BAD3A8",
    title: "Flexible Batches",
    description:
      "Weekday or weekend, online or in-person — we fit into your schedule, not the other way around.",
  },
  {
    color: "#2C74B9",
    bg: "#EAF1F8",
    border: "#9EBFDF",
    title: "Resource-Rich Learning",
    description:
      "Exclusive practice materials, mock test simulations, grammar drills, and recorded sessions — all in one place.",
  },
  {
    color: "#E5AF27",
    bg: "#FFF9EA",
    border: "#FDD571",
    title: "End-to-End Study Abroad Support",
    description:
      "From coaching to admission guidance and visa counseling — we’re with you through every step of your international journey.",
  },
];

const EecEdge = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const [cardHeights, setCardHeights] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const heights = cardRefs.current.map((ref) => ref?.offsetTop || 0);
    setCardHeights(heights);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const heights = cardRefs.current.map((ref) => ref?.offsetTop || 0);
      setCardHeights(heights);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="eec-edge-wrapper" ref={containerRef}>
      <div className="eec-edge-heading">
        <h2>The EEC Edge — What Makes Us Different?</h2>
        <p>
          We’re not just another IELTS coaching center. We’re your test prep
          partners — committed to your score, your goals, and your future.
        </p>
      </div>

      <div className="eec-stacked-container">
        {/* {features.map((item, index) => {
          const cardY = useTransform(scrollY, (v) => {
            const currentStart = cardHeights[index + 1] || 0;
            const nextStart = cardHeights[index] || Infinity;
            return v >= currentStart && v < nextStart ? 0 : index * 20;
          });

          return (
            <motion.div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="eec-edge-card"
              style={{
                position: "sticky",
                top: 100,
                zIndex: index + 1,
                translateY: cardY,
                backgroundColor: item.bg,
                border: `2px solid ${item.border}`,
              }}
            >
              <div className="eec-icon-inner">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path
                    d="M26.5639 34.7204H30.6673V20.0112..."
                    fill={item.color}
                  />
                </svg>
              </div>
              <div className="eec-card-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          );
        })} */}
      </div>
    </div>
  );
};

export default EecEdge;
