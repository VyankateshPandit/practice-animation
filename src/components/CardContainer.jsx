import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Card from "./Card";

const Cardview = () => {
  const cards = [
    {
      id: "apt1",
      title: "2BHK in Pune",
      description:
        "Spacious 2BHK apartment in Kothrud, close to markets, schools, and metro. Semi-furnished with modern amenities.",
      price: "₹42,00,000",
      duration: "950 sq.ft",
      gradient: "rgba(255, 255, 255, 0.4)", // More whitish glass effect
      bgGradient: "linear-gradient(135deg, #ff416c, #ff4b2b)",
    },
    {
      id: "apt2",
      title: "1BHK in Mumbai",
      description:
        "Compact 1BHK flat in Andheri East, ideal for professionals. Gated society with 24/7 security.",
      price: "₹89,00,000",
      duration: "600 sq.ft",
      gradient: "rgba(255, 255, 255, 0.4)", // More whitish glass effect
      bgGradient: "linear-gradient(135deg, #5ee7df, #3b82f6)",
    },
    {
      id: "apt3",
      title: "3BHK in Bangalore",
      description:
        "Luxurious 3BHK apartment in Whitefield with clubhouse, pool, and green views. Perfect for families.",
      price: "₹1,25,00,000",
      duration: "1450 sq.ft",
      gradient: "rgba(255, 255, 255, 0.4)", // More whitish glass effect
      bgGradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
    },
    {
      id: "apt4",
      title: "Studio in Hyderabad",
      description:
        "Fully furnished studio flat in Gachibowli. Ideal for singles or startup professionals. Ready to move in.",
      price: "₹38,00,000",
      duration: "450 sq.ft",
      gradient: "rgba(255, 255, 255, 0.4)", // More whitish glass effect
      bgGradient: "linear-gradient(135deg, #f6d365, #fda085)",
    },
    {
      id: "apt5",
      title: "2BHK in Chennai",
      description:
        "Modern 2BHK apartment in Velachery with smart home features and easy access to IT parks.",
      price: "₹55,00,000",
      duration: "880 sq.ft",
      gradient: "rgba(255, 255, 255, 0.4)", // More whitish glass effect
      bgGradient: "linear-gradient(135deg, #c084fc, #8b5cf6)",
    },
    {
      id: "apt6",
      title: "1RK in Delhi",
      description:
        "Affordable 1RK unit in Laxmi Nagar, ideal for students and bachelors. Excellent connectivity.",
      price: "₹22,00,000",
      duration: "350 sq.ft",
      gradient: "rgba(255, 255, 255, 0.4)",
      bgGradient: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
    },
  ];

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const newIndex = Math.min(
        Math.floor(window.pageYOffset / window.innerHeight),
        cards.length - 1
      );
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cards.length]);

  const { scrollY } = useScroll();

  const start = windowHeight;
  const step = windowHeight;
  const bgStops = [];
  const bgValues = [];
  cards.forEach((card, i) => {
    const trigger = start + step * i;
    bgStops.push(trigger, trigger + step * 0.1);
    bgValues.push(card.bgGradient, card.bgGradient);
  });
  const background = useTransform(scrollY, bgStops, bgValues);

  return (
    <div className="bg-gray-100">
      <div
        className="relative"
        style={{ height: `${(cards.length + 1) * 100}vh` }}
      >
        <motion.div className="sticky top-0 h-screen flex items-center justify-center px-4">
          <motion.div className="absolute inset-0" style={{ background }} />

          <div className="relative w-80 h-96">
            {cards.map((card, index) => {
              let zIndex;
              if (index < activeIndex) {
                zIndex = 10;
              } else if (index === activeIndex) {
                zIndex = 50;
              } else {
                zIndex = 50 - (index - activeIndex);
              }
              return (
                <Card
                  key={card.id}
                  index={index}
                  activeIndex={activeIndex}
                  data={card}
                  zIndex={zIndex}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cardview;
