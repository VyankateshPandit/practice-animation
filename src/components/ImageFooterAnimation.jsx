import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import avatar0 from "../../assets/Avatar0.svg";
import avatar1 from "../../assets/Avatar1.svg";
import avatar2 from "../../assets/Avatar2.svg";
import avatar3 from "../../assets/Avatar3.svg";
import avatar4 from "../../assets/Avatar4.svg";
import avatar5 from "../../assets/Avatar5.svg";
import avatar6 from "../../assets/Avatar6.svg";
import RotatingTextFrame from "../../assets/Rotating-Text-Frame.svg";

function ImageFooterAnimation() {
  const images = [
    avatar4,
    avatar1,
    avatar0,
    avatar6,
    avatar2,
    avatar3,
    avatar5,
    avatar3,
    avatar0,
    avatar6,
    avatar1,
    avatar5,
    avatar2,
    avatar4,
    avatar0,
    avatar1,
    avatar4,
  ];

  const rotationRef = useRef(0);
  const [rotation, setRotation] = useState(0);

  const calculatePositions = () => {
    return images.map((_, index) => {
      const totalPositions = images.length;
      const positionIndex =
        (index +
          Math.floor((rotationRef.current * totalPositions) / (2 * Math.PI))) %
        totalPositions;

      const angle =
        (positionIndex / totalPositions) * 2 * Math.PI + rotationRef.current;

      const radius = 180;

      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      const isVisible = y <= 0;

      return { x, y, isVisible };
    });
  };

  const [positions, setPositions] = useState(calculatePositions());

  useEffect(() => {
    let animationFrame;
    const speed = 0.0004;

    const updateRotation = () => {
      rotationRef.current = (rotationRef.current + speed) % (2 * Math.PI);
      setRotation(rotationRef.current);
      setPositions(calculatePositions());
      animationFrame = requestAnimationFrame(updateRotation);
    };

    animationFrame = requestAnimationFrame(updateRotation);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const calculateButtonDuration = () => {
    const framesPerSecond = 90;
    const fullRotationFrames = (2 * Math.PI) / 0.0004;
    const durationSeconds = fullRotationFrames / framesPerSecond;
    return durationSeconds;
  };

  return (
    <div className="relative w-full h-full py-9 px-4 flex items-center justify-center overflow-hidden mb-5">
      <div className="relative top-12  w-full h-80 flex items-center justify-center gap-40">
        <div className="absolute z-10 flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-sm font-[inter] font-bold text-[#323232]">
            Join the EEC Journey!
          </h2>
          <p className="text-xs font-[inter] font-normal text-[#323232]  mt-2 w-[50%]">
            See how dreams turn into realities—one visa, one admit, one success
            story at a time.
          </p>
          <motion.div
            className="mt-4 flex items-center justify-center"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: calculateButtonDuration(),
                repeat: Infinity,
                easeInOut: "linear",
                repeatType: "loop",
              },
            }}
          >
            <img src={RotatingTextFrame} />
          </motion.div>
        </div>

        {images.map((image, index) => {
          const position = positions[index];
          return position.isVisible ? (
            <motion.div
              key={index}
              className="absolute w-12 h-12 rounded-lg overflow-hidden shadow-lg  flex justify-evenly"
              style={{
                x: position.x,
                y: position.y,
                opacity: 1,
              }}
            >
              <img
                src={image}
                alt={`Image ${index}`}
                className="w-full h-full object-cover "
              />
            </motion.div>
          ) : null;
        })}
      </div>
    </div>
  );
}

export default ImageFooterAnimation;
