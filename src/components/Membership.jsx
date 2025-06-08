import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Membership = () => {
  const centerData = {
    heading: "Explore All 26 Centers – From Ahmedabad to Rajkot",
    subtext:
      "Every location is fully equipped with study spaces, libraries, and expert support.",
    locations: [
      {
        city: "Ahmedabad",
        centers: [
          { name: "Memnagar", image: "/images/image.png" },
          { name: "Odhav", image: "/images/image.png" },
          { name: "Maninagar", image: "/images/image.png" },
          { name: "Nikol", image: "/images/image.png" },
          { name: "Ghatlodiya", image: "/images/image.png" },
          { name: "Naroda", image: "/images/image.png" },
          { name: "Bapunagar", image: "/images/image.png" },
          { name: "Chandkheda", image: "/images/image.png" },
        ],
      },
      {
        city: "Vadodara",
        centers: [
          { name: "Alkapuri", image: "/images/image.png" },
          { name: "Nizampura", image: "/images/image.png" },
          { name: "Manjalpur", image: "/images/image.png" },
          { name: "New VIP Road", image: "/images/image.png" },
        ],
      },
      {
        city: "Surat",
        centers: [
          { name: "Dumbhal", image: "/images/image.png" },
          { name: "Mota Varrachha", image: "/images/image.png" },
          { name: "Katargam", image: "/images/image.png" },
          { name: "Ghod Dod Road", image: "/images/image.png" },
        ],
      },
      {
        city: "Other Centers",
        centers: [
          { name: "Himatnagar", image: "/images/image.png" },
          { name: "Kalol", image: "/images/image.png" },
          { name: "Vapi", image: "/images/image.png" },
          { name: "Navsari", image: "/images/image.png" },
          { name: "Jalandhar, Punjab", image: "/images/image.png" },
          { name: "Nadiad", image: "/images/image.png" },
          { name: "Bharuch", image: "/images/image.png" },
          { name: "Visnagar", image: "/images/image.png" },
          { name: "Vesu", image: "/images/image.png" },
          { name: "Vallabh Vidyanagar Anand", image: "/images/image.png" },
          { name: "Mehsana", image: "/images/image.png" },
        ],
      },
    ],
  };

  const [index, setIndex] = useState(0);
  const totalCities = centerData.locations.length;
  const maxIndex = totalCities - 2;

  const getAhmedabadSpan = (i) => {
    switch (i) {
      case 0:
        return "col-span-2";
      case 1:
      case 2:
      case 3:
        return "col-span-1";
      case 4:
        return "col-span-2";
      case 5:
      case 6:
        return "col-span-1";
      case 7:
        return "col-span-3";
      default:
        return "col-span-1";
    }
  };

  const getVadodaraSpan = (i) => {
    const spans = ["col-span-1", "col-span-2", "col-span-1", "col-span-4"];
    return spans[i] || "col-span-1";
  };

  const getSuratSpan = (i) => {
    const spans = ["col-span-1", "col-span-2", "col-span-1", "col-span-4"];
    return spans[i] || "col-span-1";
  };

  const getOtherCentersSpan = (i) => {
    const spans = [
      "col-span-2",
      "col-span-1",
      "col-span-1",
      "col-span-1",
      "col-span-2",
      "col-span-1",
      "col-span-1",
      "col-span-1",
      "col-span-2",
      "col-span-3",
    ];
    return spans[i] || "col-span-1";
  };

  const getCitySpan = (city, i) => {
    switch (city) {
      case "Ahmedabad":
        return getAhmedabadSpan(i);
      case "Vadodara":
        return getVadodaraSpan(i);
      case "Surat":
        return getSuratSpan(i);
      case "Other Centers":
        return getOtherCentersSpan(i);
      default:
        return "col-span-1";
    }
  };

  const nextCities = () => {
    if (index < maxIndex) setIndex(index + 2);
  };

  const prevCities = () => {
    if (index > 0) setIndex(index - 2);
  };

  const visibleCities = [
    centerData.locations[index],
    centerData.locations[index + 1],
  ];

  const prevDisabled = index === 0;
  const nextDisabled = index >= maxIndex;

  return (
    <div className="bg-[#FAFAFA] flex flex-col px-4 py-9 items-center gap-5">
      <div className="flex w-full max-w-xl flex-col gap-4 items-center text-center">
        <p className="text-[#323232] font-inter text-xl font-bold leading-[30px]">
          {centerData.heading}
        </p>
        <p className="text-[#5B5B5B] font-inter font-normal text-sm leading-[20px]">
          {centerData.subtext}
        </p>
      </div>

      <div className="relative w-full max-w-6xl min-h-[750px] flex flex-col gap-10">
        <AnimatePresence mode="sync">
          {visibleCities.map((location, i) => (
            <motion.div
              key={`${location.city}`}
              className="w-full"
              initial={{
                y: i === 0 ? -40 : 40,
                opacity: 1,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: i === 0 ? 40: -40,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
                ease: "linear",
                delay: i * 0.1,
              }}
            >
              <motion.h3
                key={`heading-${location.city}-${index}`}
                initial={{
                  y: i === 0 ? -20 : 20,
                  opacity: 0.7,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: i === 0 ? 20 : -20,
                  opacity: 0.7,
                }}
                transition={{
                  duration: 0.5,
                  ease: "linear",
                  delay: i * 0.03,
                }}
                className="text-center font-gt text-2xl font-[900] leading-8 mt-6 mb-4"
                style={{
                  color: location.city === "Ahmedabad" ? "#C31E5D" : "#3876C3",
                }}
              >
                {location.city}
              </motion.h3>

              <motion.div
                key={`grid-${location.city}-${index}`}
                initial={{
                  y: i === 0 ? -60 : 60,
                  opacity: 1,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: i === 0 ? 120 : -120,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeIn",
                  delay: i * 0.15,
                }}
                className="grid grid-cols-4 gap-4"
              >
                {location.centers.map((center, idx) => {
                  const colSpan = getCitySpan(location.city, idx);
                  const isChandkheda = center.name === "Chandkheda";
                  const isVisnagar = center.name === "Visnagar";

                  return (
                    <motion.div
                      key={idx}
                      className={`relative bg-white rounded overflow-hidden shadow ${colSpan} transition-all`}
                      initial={
                        isChandkheda
                          ? { x: 0, opacity: 0.7 }
                          : isVisnagar
                          ? { x: 100, opacity: 0.7 }
                          : { opacity: 0.7 }
                      }
                      animate={
                        isChandkheda
                          ? { x: 0, opacity: 1 }
                          : isVisnagar
                          ? { x: 0, opacity: 1 }
                          : { opacity: 1 }
                      }
                      exit={
                        isChandkheda
                          ? {
                              x: -100,
                              opacity: 0.7,
                              transition: { duration: 0.1, ease: "linear" },
                            }
                          : { opacity: 0.7 }
                      }
                      transition={
                        isChandkheda
                          ? { duration: 0.5, ease: "linear" }
                          : isVisnagar
                          ? {
                              duration: 0.1,
                              delay: 0.1,
                              ease: "linear",
                            }
                          : {}
                      }
                    >
                      <img
                        src={center.image}
                        alt={center.name}
                        className="w-full h-[120px] object-cover"
                      />
                      <div className="absolute bottom-0 left-0 w-full px-2 py-1 bg-gradient-to-t from-black/70 to-transparent">
                        <motion.p className="text-white font-inter text-base font-normal leading-6 text-center">
                          {center.name}
                        </motion.p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={prevCities}
          disabled={prevDisabled}
          className={`flex w-12 h-12 justify-center items-center rounded-[28px] border bg-[#FEFEFE] backdrop-blur-sm transition`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
          >
            <path
              d="M15.8327 10H4.16602M4.16602 10L9.99935 15.8334M4.16602 10L9.99935 4.16669"
              stroke={prevDisabled ? "#DADADA" : "#767676"}
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          onClick={nextCities}
          disabled={nextDisabled}
          className={`flex w-12 h-12 justify-center items-center rounded-[28px] border bg-[#FEFEFE] backdrop-blur-sm transition`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
          >
            <path
              d="M4.16602 10H15.8327M15.8327 10L9.99935 4.16669M15.8327 10L9.99935 15.8334"
              stroke={nextDisabled ? "#DADADA" : "#767676"}
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Membership;
