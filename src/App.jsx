import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Course from "./pages/course/course";
import Home from "./pages/home/Home";
import ContactUs from "./pages/contactUs/ContactUs";
import Exam from "./pages/exam&visa/Exam";
import About from "./pages/about/AboutScreen";
import Webinars from "./pages/liveEvents/live_events";
import StudyAbroadSeminar from "./pages/studyAbroadSeminar/StudyAbroadSeminar";
import Main from "./pages/university-meetup/Main";
import FAQ from "./pages/FAQ/FAQ";
import Event from "./pages/event&webinar/Event";
import TrainerCarousel from "./components/trainerCorousel";
import EEcComponents from "./pages/EecComponents";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/exam&visa" element={<Exam />} />
          <Route path="/about" element={<About />} />
          <Route path="/liveEvents" element={<Webinars />} />
          <Route path="/studyAbroad" element={<StudyAbroadSeminar />} />
          <Route path="/meetup" element={<Main />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/event&webinar" element={<Event />} />
          <Route path="/trainer" element={<TrainerCarousel />} />
          <Route path="/eec-components" element={<EEcComponents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
