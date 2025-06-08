/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { useState, useEffect, useRef } from "react";
import "./course.css";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import dartmouth from "../../../assets/dartmouth.svg";
import harvard from "../../../assets/harvard_university.svg";
import london from "../../../assets/london_busi_school.svg";
import mit from "../../../assets/MIT.svg";
import nyu from "../../../assets/nyu.svg";
import oxford from "../../../assets/oxford.svg";
import standford from "../../../assets/standford_university.svg";
import ucla from "../../../assets/ucla.svg";
import university from "../../../assets/university.svg";
import yale from "../../../assets/yale.svg";
import stars from "../../../assets/Stars.svg";
import img1 from "../../../assets/img1.svg";
import img2 from "../../../assets/img2.svg";
import img3 from "../../../assets/img3.svg";
import Image1 from "../../../assets/image1.svg";
import Image2 from "../../../assets/image2.svg";
import Image3 from "../../../assets/image3.svg";
import Image4 from "../../../assets/image4.svg";
import video from "../../../assets/heroBannerVideo.mp4";
import videoThumbnail from "../../../assets/Video.svg";
import dropdown1 from "../../../assets/dropdown1.svg";
import dropdown2 from "../../../assets/dropdown2.svg";
import VideoPlayer from "./components/VideoPlayer";
import CtaSection from "../../components/CtaSection";
import Badge from "../../components/Badge";
import QuoteSection from "../../components/QuoteSection";
import SpeakingWriting from "../../components/SpeakingWriting";
import LogoScrollingEffect from "../../components/LogoScrollingEffect";
import BottomNav from "../../components/BottomNav";

const gradientStops = [0, 270, 920, 1370, 1800, 2245, 2750];
const gradients = [
  "linear-gradient(to bottom, #FFF, #FFF)",
  "linear-gradient(to bottom, #FFF, #FFF)",
  "linear-gradient(to bottom, #FFF, #FFF)",
  "linear-gradient(to bottom, #88D1D8, #C8EEF1)",
  "linear-gradient(to bottom, #4557F6, #D7DBFF)",
  "linear-gradient(to bottom, #FFA585, #FFEDA0)",
  "linear-gradient(to bottom, #0061FF, #60EFFF)",
];

const Data = [
  {
    id: 1,
    heading: "Personalised Classroom Coaching & Flexible Batch Timings",
    subheading:
      "Master IELTS with structured coaching designed for your success.",
    metric: {
      metric1: {
        heading: "Expert-Led Training",
        subheading: "Learn from top IELTS trainers with proven success rates.",
      },
      metric2: {
        heading: "Flexible Learning",
        subheading:
          "Choose morning, evening, or weekend batches as per your schedule.",
      },
    },
    button: "Join Now!",
  },
  {
    id: 2,
    heading: "1:1 Daily Speaking & Writing Practice",
    subheading:
      "Enhance fluency and writing skills with personalized practice.",
    metric: {
      metric1: {
        heading: "Daily Speaking Drills",
        subheading: "Real-time mentor feedback to boost confidence.",
      },
      metric2: {
        heading: "Structured Writing Practice",
        subheading: "Master essay & task responses with expert techniques.",
      },
    },
    button: "Start Practicing!",
  },
  {
    id: 3,
    heading: "Exclusive Grammar Batches & Resource Materials",
    subheading:
      "Strengthen your foundation with IELTS-focused grammar training.",
    metric: {
      metric1: {
        heading: "Targeted Grammar Lessons",
        subheading: "Learn only what’s essential for IELTS success.",
      },
      metric2: {
        heading: "Live Doubt-Solving Sessions",
        subheading: "Get instant answers to tricky grammar questions.",
      },
    },
    button: "Improve Now!",
  },
  {
    id: 4,
    heading: "Membership Access to 26+ Centers Across Gujarat",
    subheading:
      "Get unlimited access to learning centers for a seamless study experience.",
    metric: {
      metric1: {
        heading: "Switch Centres Anytime",
        subheading: "Attend classes at any of our 26+ locations.",
      },
      metric2: {
        heading: "Free Library & Study Spaces",
        subheading: "Prepare in a focused, distraction-free environment.",
      },
    },
    button: "Access Now!",
  },
];

const parentCard = [
  {
    id: 1,
    heading: "100K",
    text: "Students Trained Across 26+ Centers",
  },
  {
    id: 2,
    heading: "95%",
    text: "Band 7+ in First Attempt",
  },
  {
    id: 3,
    heading: "30+ Hours",
    text: "1:1 Speaking & Writing Sessions",
  },
];

const scrollingImages = [
  {
    image: harvard,
    class: "harvard",
  },
  {
    image: ucla,
    class: "ucla",
  },
  {
    image: yale,
    class: "yale",
  },
  {
    image: standford,
    class: "standford",
  },
  {
    image: oxford,
    class: "oxford",
  },
  {
    image: university,
    class: "university",
  },
  {
    image: nyu,
    class: "nyu",
  },
  {
    image: dartmouth,
    class: "dartmouth",
  },
  {
    image: london,
    class: "london",
  },
  {
    image: mit,
    class: "mit",
  },
];

const Course = () => {
  const { scrollY } = useScroll();
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (videoEl.paused) {
      videoEl.play();
      setIsPlaying(true);
    } else {
      videoEl.pause();
      setIsPlaying(false);
    }
  };

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log(latest);

  //   if (latest >= 595) {
  //     setIndex(1);
  //   } else {
  //     setIndex(0);
  //   }
  // });

  const bgColor = useTransform(scrollY, gradientStops, gradients);
  // const Opacity = useTransform(scrollY, [3200, 3600], [1, 0]);
  const blurValue = useTransform(scrollY, [730, 800], [0, 2]);

  const blur = useMotionTemplate`blur(${blurValue}px)`;

  const [current, setCurrent] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentName, setCurrentName] = useState(0);

  const images = [img1, img2, img3];

  const names = ["Renee Wells", "Felipe Lind", "Alicia Kovacek"];

  const descripName = [
    {
      id: 1,
      descrip:
        "EEC Global’s structured approach and expert coaching made all the difference!",
      name: "Renee Wells",
    },
    {
      id: 2,
      descrip:
        "EEC desc2 structured approach and expert coaching helped me score Band 8.0!",
      name: "Felipe Lind",
    },
    {
      id: 3,
      descrip:
        "EEC desc3 helped me boost my confidence with 1:1 sessions and AI mock tests!",
      name: "Alicia Kovacek",
    },
  ];

  const handleNext = () => {
    setCurrent((prev1) => (prev1 + 1) % images.length);
    setCurrentIndex((prev) => (prev + 1) % descripName.length);
    // setCurrentName((prev) => (prev + 1) % names.length);
  };

  const handlePrev = () => {
    setCurrent((prev1) => (prev1 - 1 + images.length) % images.length);
    setCurrentIndex(
      (prev) => (prev - 1 + descripName.length) % descripName.length
    );
    // setCurrentName((prev1) => (prev1 - 1 + names.length) % names.length);
  };

  const getVisibleImages = () => {
    const prevIndex = (current - 1 + images.length) % images.length;
    const nextIndex = (current + 1) % images.length;

    return [images[prevIndex], images[current], images[nextIndex]];
  };

  const [screenInfo, setInfo] = useState(window.screen.width);

  useEffect(() => {
    const handleResize = () => {
      setInfo(window.screen.width);
      console.log("Updated screen width:", window.screen.width);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const divRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleHeight = () => {
      if (divRef.current) {
        const h = divRef.current.offsetHeight + 100;

        setHeight(h);
      }
    };

    handleHeight();

    window.addEventListener("resize", handleHeight);

    return () => window.removeEventListener("resize", handleHeight);
  }, []);

  useEffect(() => {
    console.log(height);
  }, [height]);

  const [isFixed, setIsFixed] = useState(false);
  const [targetScrollY, setTargetScrollY] = useState(0);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    console.log("screen width: ", screenWidth);

    if (screenWidth <= 300) {
      setTargetScrollY(700);
    } else if (screenWidth <= 400) {
      setTargetScrollY(420); // add more conditions as needed
    } else {
      setTargetScrollY(1000);
    }
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest);

    if (latest >= targetScrollY) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  });

  return (
    <div className="main-div">
      {/* {screenInfo<=767.99 &&
    <>  */}
      <div className="dropdownContainer">
        <div className="icons-image">
          <img src={dropdown1} alt="drp1" id="dropDown-1" />
          <img src={dropdown2} alt="drp1" id="dropDown-2" />
        </div>
        <p className="dropdown-heading">IELTS</p>
      </div>
      {/* 1st div */}
      <div className="intro-content">
        <div className="heading-and-text">
          <h2 className="heading">
            Your Gateway to Global Education Starts Here!
          </h2>
          <p className="text" style={{ marginLeft: -32 }}>
            Master IELTS with expert-led training.
          </p>
        </div>
        <VideoPlayer videoThumbnail={videoThumbnail} video={video} />
        <div style={{ height: 40 }} />
        {/* <img src={videoThumbnail} alt="thumbnail" className="thumbnailImage" />
        <div className="video-wrapper">
          <video
            ref={videoRef}
            loop
            onClick={handlePlayPause}
            className="intro-video"
          >
            <source src={video} type="video/mp4" />
          </video>

          {!isPlaying && (
            <button
              className="play-button"
              aria-label="Play video"
              onClick={handlePlayPause}
            />
          )}
        </div> */}
        <div className="title">
          <h1 className="heading">Why Choose EEC for Test Prep?</h1>
          <p className="text">
            EEC Global is a trusted leader in IELTS coaching. Get personalized
            1:1 coaching with daily speaking and writing practice for targeted
            improvement. Plus, with{" "}
            <span className="highlight-red">26+ centers across Gujarat</span>,
            you can learn flexibly at your convenience.
          </p>
        </div>
        <div style={{ height: 10 }} />

        <span className="aftertext">
          📢 Join EEC and achieve your dream IELTS score!
        </span>
        <div style={{ height: 10 }} />
      </div>

      <div
        className="parent-div"
        style={{
          backgroundColor: bgColor,
          // position: index === 1 && 'fixed',
          // top: index === 1 && '12%',
          // opacity: Opacity,
          position: isFixed ? "fixed" : "relative",
          top: isFixed ? "10%" : "auto",
        }}
      >
        <motion.div
          transition={{ duration: 0.3 }}
          style={{ filter: blur }}
          className="parent-card"
        >
          <div className="heading-and-text">
            <h1 className="heading">
              Your Path to a High IELTS Score Starts Here!
            </h1>
            <p className="text">
              Learn, practice, and master every IELTS section with a proven
              strategy for maximum score improvement through a personalized
              approach!
            </p>
          </div>

          <div className="content">
            {parentCard.map((content) => (
              <div className="heading-and-text" key={content.id}>
                <h2 className="heading">{content.heading}</h2>
                <p className="text">{content.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="cards">
        <div style={isFixed ? { height: `80vh` } : {}} />
        {Data.map((content) => (
          <motion.div
            ref={divRef}
            key={content.id}
            className={`card${content.id} child-card`}
          >
            <div className="card-content">
              <div className="card-header">
                <h2 className="heading">{content.heading}</h2>
                <p className="text">{content.subheading}</p>
              </div>
              <div className="card-metrics">
                <div className="metric1 metric">
                  <h2 className="heading">{content.metric.metric1.heading}</h2>
                  <p className="text">{content.metric.metric1.subheading}</p>
                </div>
                <div className="metric2 metric">
                  <h2 className="heading">{content.metric.metric2.heading}</h2>
                  <p className="text">{content.metric.metric2.subheading}</p>
                </div>
              </div>
            </div>
            <button type="button" className="btn">
              {content.button}
            </button>
          </motion.div>
        ))}
      </div>

      <div className="info-and-images">
        {/* <div className="heading-and-text">
          <h1 className="heading">Where do our students go next?</h1>
          <p className="text">
            Our alumni have successfully progressed to prestigious universities
            around the world. Here's a glimpse of institutions where our
            students continue their academic journey.
          </p>
        </div>
        <div className="items">
          <div className="scrolling-images">
            <div className="logo items1">
              {scrollingImages.map((component, index) => {
                return (
                  <img
                    src={component.image}
                    alt={component.class}
                    key={index}
                    className={component.class}
                  />
                );
              })}
            </div>
          </div>

          <div className="scrolling-images">
            <div className="logo items2">
              {scrollingImages.map((component, index) => {
                return (
                  <img
                    src={component.image}
                    alt={component.class}
                    key={index}
                    className={component.class}
                  />
                );
              })}
            </div>
          </div>
        </div> */}
        <LogoScrollingEffect
          sectionTitle="Where do our students go next?"
          sectionDescription="Our alumni have successfully progressed to prestigious universities
            around the world. Here's a glimpse of institutions where our
            students continue their academic journey."
        />
      </div>
      
      <QuoteSection />

      <SpeakingWriting />

      {/* 7th div */}
      <CtaSection />

      {/* 8th div */}
      <Badge />

      {/* 9th div */}
      <div className="section9">
        <div className="heading-and-text">
          <h1 className="heading">Real Success Stories!</h1>
          <p className="text">
            See how EEC Global has helped students achieve their dream IELTS
            scores with expert training and personalized guidance.
          </p>
        </div>
        <div className="text-and-images">
          <div className="text-and-star">
            <div className="star-and-p">
              <img src={stars} className="stars" alt="stars" />
              <p>Band 8.0</p>
            </div>
            <p className="descr" key={index}>
              {descripName[current].descrip}
            </p>
          </div>
          <p className={`name name${descripName[current].id}`} key={index}>
            {descripName[currentIndex].name}
          </p>
          <div className="images">
            {getVisibleImages().map((image, index) => {
              return (
                <img
                  src={image}
                  alt={`img${index}`}
                  className={`img${index}`}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <div className="btns">
          <div className="left-btn" onClick={handlePrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M15.8334 10.0001H4.16675M4.16675 10.0001L10.0001 15.8334M4.16675 10.0001L10.0001 4.16675"
                stroke="#767676"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="right-btn" onClick={handleNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4.16675 10.0001H15.8334M15.8334 10.0001L10.0001 4.16675M15.8334 10.0001L10.0001 15.8334"
                stroke="#767676"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* section 10 */}
      <div className="section10">
        <div className="heading-and-text">
          <h1 className="heading">Stay Inspired – Follow Us on Instagram!</h1>
          <p className="text">
            Tag us <span className="highlight"> @EECGlobal </span> and share
            your
            <span className="highlight"> #IELTSSuccessStory </span> for a chance
            to be featured!
          </p>
        </div>
        <div className="images">
          <img src={Image1} alt="instaimg" className="image-item" />
          <img src={Image2} alt="instaimg" className="image-item" />
          <img src={Image3} alt="instaimg" className="image-item" />
          <img src={Image4} alt="instaimg" className="image-item" />
        </div>
      </div>
      
      {/* </>
    }
    {screenInfo>=768 && <div style={{display: "flex",justifyContent:"center",alignItems:"center", height: "100vh"}}><p style={{fontFamily:"inter",fontSize:"20px"}}>Open in mobile</p></div>} */}
    </div>
    
  );
};
export default Course;
