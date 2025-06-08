import React from 'react';
import './OurAchievement.css';
import bandIcon from '../../../assets/achievement-icon.svg';
import studentIcon from '../../../assets/course-icon.svg';
import experienceIcon from '../../../assets/job-icon.svg';
import abroadIcon from '../../../assets/abroad-icon.svg';

const OurAchievement = () => {
  return (
    <section className="achievement-section">
      <div className="achievement-header">
        <h2>Our Achievements</h2>
        <p>
          For 25+ years, EEC has provided top-tier IELTS and test prep, setting benchmarks with
          quality training and personalised support.
        </p>
      </div>

      <div className="achievement-grid">
        <div className="achievement-card pink">
        
        <div className="icon-circle bg-[#ECB9CD] border-[#F9E9EF] border-[4px] rounded-full">
  <img src={bandIcon} alt="Band Icon" />
</div>

        
          <h3>100,000+ Band Scores Delivered</h3>
          <p>
            Students from all walks of life have reached their dream scores with EEC’s proven
            training methods.
          </p>
        </div>

        <div className="achievement-card blue">
          <div className="icon-circle bg-[#B7DFE3] rounded-full">
            <img src={studentIcon} alt="Student Icon" />
          </div>
          <h3>95%+ Student Satisfaction Rate</h3>
          <p>
            From the first class to the final mock test — our students trust us and it shows.
          </p>
        </div>

        <div className="achievement-card brown">
          <div className="icon-circle bg-[#CDC4C1] rounded-full">
            <img src={experienceIcon} alt="Experience Icon" />
          </div>
          <h3>25+ Years of Expertise</h3>
          <p>
            With decades of experience, our trainers and systems are refined to ensure high-impact
            results.
          </p>
        </div>

        <div className="achievement-card orange">
          <div className="icon-circle bg-[#FCD6BA] rounded-full">
            <img src={abroadIcon} alt="Abroad Icon" />
          </div>
          <h3>Global University Admits</h3>
          <p>
            Our alumni have earned admits to top universities in the UK, Canada, USA, and Australia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurAchievement;
