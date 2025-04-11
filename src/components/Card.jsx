import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  custom: (custom) => {
    if (custom.index > custom.activeIndex) {
      return { y: "300%", transition: { duration: 0.9 } };
    } else if (custom.index === custom.activeIndex) {
      // Active card is centered.
      return { y: 0, transition: { duration: 0.9 } };
    } else {
      const offset = (custom.activeIndex - custom.index) * 10;
      return { y: `-${offset}px`, transition: { duration: 0.9 } };
    }
  },
};

const Card = ({ index, activeIndex, data, zIndex }) => {
  return (
    <motion.div
      custom={{ index, activeIndex }}
      variants={cardVariants}
      initial={false}
      animate="custom"
      className="absolute w-full h-full rounded-xl flex flex-col items-center justify-center p-4 shadow-2xl backdrop-blur-md"
      style={{
        background: data.gradient,
        zIndex,
        border: "1px solid rgba(255, 255, 255, 0.3)",
        WebkitBackdropFilter: "blur(10px)",
        backdropFilter: "blur(10px)",
      }}
    >
      <h2 className="text-xl font-bold mb-2">{data.title}</h2>
      <p className="text-sm text-center mb-4">{data.description}</p>
      <div className="flex justify-between w-full items-center">
        <span className="text-lg font-bold">{data.price}</span>
        <span className="bg-black text-white text-sm px-3 py-1 rounded-full shadow">
          {data.duration}
        </span>
      </div>
    </motion.div>
  );
};

export default Card;
