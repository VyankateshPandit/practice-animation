import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import "./TestimonialSection.css";
import profileImg from "../../assets/Profile-Image.svg";
import videoFrame from "../../assets/video-frame.svg";
import harvardLogo from "../../assets/harvard_university.svg";
import uclalogo from "../../assets/ucla.svg";
import yaleLogo from "../../assets/yale.svg";
import ArrowLeft from "../../assets/arrowleft.svg";
import ArrowRight from "../../assets/arrowright.svg";

// Testimonial data
const testimonialData = [
  {
    id: 1,
    name: "Joshua Sauer",
    role: "Masters of Computer Science",
    profileImage: profileImg,
    hasVideo: true,
    videoThumbnail: videoFrame,
    description: "",
    affiliatedLogos: [
      { src: harvardLogo, alt: "Harvard University", className: "harvardlogo" },
      { src: uclalogo, alt: "UCLA", className: "uclalogo" },
      { src: yaleLogo, alt: "Yale University", className: "yalelogo" },
    ],
  },
  {
    id: 2,
    name: "Joshua Sauer",
    role: "Masters of Computer Science",
    profileImage: profileImg,
    hasVideo: false,
    description:
      "Neque quae et ut. Et quod quas beatae consequuntur. Voluptate aut ut et. Labore rerum excepturi hic magnam quia earum. Quam iusto velit qui non occaecati aliquam eum.\n\nQuia qui accusamus culpa architecto aspernatur porro ut velit praesentium. Sit cupiditate odio assumenda non. Qui culpa aut cum qui eius quibusdam odio. Saepe ab iusto quia repellendus et consequatur et. Odio velit laudantium sapiente eos a ea est. Quam mollitia nemo.",
    affiliatedLogos: [
      { src: harvardLogo, alt: "Harvard University", className: "harvardLogo" },
      { src: uclalogo, alt: "UCLA", className: "uclalogo" },
      { src: yaleLogo, alt: "Yale University", className: "yaleLogo" },
    ],
  },
  {
    id: 3,
    name: "Joshua Sauer",
    role: "Masters of Computer Science",
    profileImage: profileImg,
    hasVideo: false,
    description:
      "Neque quae et ut. Et quod quas beatae consequuntur. Voluptate aut ut et. Labore rerum excepturi hic magnam quia earum. Quam iusto velit qui non occaecati aliquam eum.\n\nQuia qui accusamus culpa architecto aspernatur porro ut velit praesentium. Sit cupiditate odio assumenda non. Qui culpa aut cum qui eius quibusdam odio. Saepe ab iusto quia repellendus et consequatur et. Odio velit laudantium sapiente eos a ea est. Quam mollitia nemo.",
    affiliatedLogos: [
      { src: harvardLogo, alt: "Harvard University", className: "harvardLogo" },
      { src: uclalogo, alt: "UCLA", className: "uclalogo" },
      { src: yaleLogo, alt: "Yale University", className: "yaleLogo" },
    ],
  },
  {
    id: 4,
    name: "Joshua Sauer",
    role: "Masters of Computer Science",
    profileImage: profileImg,
    hasVideo: false,
    description:
      "Neque quae et ut. Et quod quas beatae consequuntur. Voluptate aut ut et. Labore rerum excepturi hic magnam quia earum. Quam iusto velit qui non occaecati aliquam eum.\n\nQuia qui accusamus culpa architecto aspernatur porro ut velit praesentium. Sit cupiditate odio assumenda non. Qui culpa aut cum qui eius quibusdam odio. Saepe ab iusto quia repellendus et consequatur et. Odio velit laudantium sapiente eos a ea est. Quam mollitia nemo.",
    affiliatedLogos: [
      { src: harvardLogo, alt: "Harvard University", className: "harvardLogo" },
      { src: uclalogo, alt: "UCLA", className: "uclalogo" },
      { src: yaleLogo, alt: "Yale University", className: "yaleLogo" },
    ],
  },
];

function TestimonialSection(props) {
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
    const cardWidth = 305; // Width of a card

    if (scrollRef.current) {
      const targetIndex =
        direction === "right"
          ? Math.min(activeCardIndex + 1, testimonialData.length - 1)
          : Math.max(activeCardIndex - 1, 0);

      if (cardsRef.current[targetIndex]) {
        const cardLeft = cardsRef.current[targetIndex].offsetLeft;
        const containerLeft = scrollRef.current.offsetLeft;
        const containerWidth = scrollRef.current.clientWidth;

        scrollRef.current.scrollTo({
          left: cardLeft - containerLeft - (containerWidth - cardWidth) / 2,
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

  // Function to render the card content (video or description)
  const renderCardContent = (testimonial) => {
    if (testimonial.hasVideo) {
      return (
        <div className="video-frame">
          <img
            src={testimonial.videoThumbnail}
            alt="Video thumbnail"
            className="video-frame-img"
          />
        </div>
      );
    } else {
      return (
        <div className="card-desc">
          {testimonial.description.split("\n\n").map((paragraph, index) => (
            <React.Fragment key={index}>
              <p>{paragraph}</p>
              {index < testimonial.description.split("\n\n").length - 1 && (
                <br />
              )}
            </React.Fragment>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="testimonial-section-container">
      <div className="stories-container">
        <h1 className="stories-heading">{props.sectionTitle}</h1>
        <p className="stories-tagline">{props.sectionDescription}</p>
      </div>
      <div className="testimonial-container">
        <div className="testimonial-scroll-wrapper" ref={scrollRef}>
          <div className="testimonial-cards">
            {testimonialData.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={testimonial.hasVideo ? "card1" : "card2"}
                ref={(el) => (cardsRef.current[index] = el)}
                variants={cardVariants}
                animate={activeCardIndex === index ? "active" : "inactive"}
                initial="inactive"
              >
                <div className="profile-section">
                  <img
                    src={testimonial.profileImage}
                    alt="Profile"
                    className="profile-pic"
                  />
                  <div className="profile-texts">
                    <h3 className="profile-name">{testimonial.name}</h3>
                    <p className="profile-desc">{testimonial.role}</p>
                  </div>
                </div>

                {renderCardContent(testimonial)}

                <div className="affilated-logos">
                  {testimonial.affiliatedLogos.map((logo, logoIndex) => (
                    <img
                      key={logoIndex}
                      src={logo.src}
                      alt={logo.alt}
                      className={logo.className}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="testimonial-arrows">
          <motion.img
            src={ArrowLeft}
            alt="left"
            className="Arrow"
            onClick={() => canScrollLeft && scroll("left")}
            whileHover={canScrollLeft ? { scale: 1.1 } : {}}
            whileTap={canScrollLeft ? { scale: 0.9 } : {}}
            animate={{ opacity: canScrollLeft ? 1 : 0.5 }}
          />
          <motion.img
            src={ArrowRight}
            alt="right"
            className="Arrow"
            onClick={() => canScrollRight && scroll("right")}
            whileHover={canScrollRight ? { scale: 1.1 } : {}}
            whileTap={canScrollRight ? { scale: 0.9 } : {}}
            animate={{ opacity: canScrollRight ? 1 : 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
