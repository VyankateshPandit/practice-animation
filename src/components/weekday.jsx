import React, { useState } from "react";
import { motion } from "framer-motion";

const batches = [
  {
    title: "Weekend Batch",
    timing: "11 am - 4 pm",
    startDate: "April 27, 2025",
    duration: "8 weeks",
    rotation: 19.842,
    yPosition: -140,
  },
  {
    title: "Weekday Batch",
    timing: "Morning: 8 am - 11 am | Evening: 4 pm - 7 pm",
    startDate: "April 27, 2025",
    duration: "10 weeks",
    cta: true,
    rotation: 0,
    yPosition: 0,
  },
  {
    title: "Intensive Batch",
    timing: "9 am – 1 pm",
    startDate: "May 5, 2025",
    duration: "4 weeks",
    rotation: -19.842,
    yPosition: 140,
  },
];

export default function BatchSelection() {
  const [selected, setSelected] = useState(1); // Default is Weekday

  return (
    <div className="flex w-[440px] p-8 flex-col items-center gap-5 bg-[#FEFEFE]">
      <div className="text-center">
        <p className="text-[#323232] text-xl font-bold leading-[30px]">
          Choose Your Perfect Batch
        </p>
        <p className="text-[#5B5B5B] text-sm leading-[20px]">
          Morning, evening, or weekends – we’ve got a batch that fits your routine.
        </p>
      </div>

      <div className="relative h-[520px] w-full flex items-center justify-center">
        {/* Weekend and Intensive Batches (Top & Bottom) */}
        {batches.map((batch, index) => {
          if (index === 1) return null; // Skip Weekday here

          const isActive = selected === index;

          return (
            <motion.div
              key={batch.title}
              onClick={() => setSelected(index)}
              className="absolute w-[380px] p-6 rounded-xl cursor-pointer shadow-lg"
              style={{
                backgroundColor: isActive ? "#242424" : "#EBEBEB",
                color: isActive ? "#FEFEFE" : "#767676",
                zIndex: isActive ? 20 : 5,
              }}
              animate={{
                y: batch.yPosition,
                rotate: batch.rotation,
                scale: isActive ? 1 : 0.9,
                opacity: isActive ? 1 : 0.5,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <p className="text-2xl font-bold text-center">{batch.title}</p>
              <div className="mt-4 space-y-2 text-sm">
                <div>
                  <strong>Timing:</strong> {batch.timing}
                </div>
                <div>
                  <strong>Start Date:</strong> {batch.startDate}
                </div>
                <div>
                  <strong>Duration:</strong> {batch.duration}
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Weekday Batch (Always in Center) */}
        <motion.div
          className="absolute w-[380px] p-6 rounded-xl shadow-lg cursor-pointer"
          onClick={() => setSelected(1)}
          style={{
            backgroundColor: selected === 1 ? "#242424" : "#EBEBEB",
            color: selected === 1 ? "#FEFEFE" : "#767676",
            zIndex: 30,
          }}
          animate={{
            scale: selected === 1 ? 1 : 0.95,
            opacity: 1,
            rotate: 0,
            y: 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <p className="text-2xl font-bold text-center">Weekday Batch</p>
          <div className="mt-4 space-y-2 text-sm">
            <div>
              <strong>Timing:</strong> Morning: 8 am - 11 am | Evening: 4 pm - 7 pm
            </div>
            <div>
              <strong>Start Date:</strong> April 27, 2025
            </div>
            <div>
              <strong>Duration:</strong> 10 weeks
            </div>
          </div>
          {selected === 1 && (
            <div className="mt-6 px-4 py-2 bg-[#323232] rounded text-center text-white text-sm font-bold">
              Book Your Free Demo Now
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
