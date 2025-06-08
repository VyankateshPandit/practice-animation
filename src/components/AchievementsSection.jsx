import React from "react";
import "./AchievementsSection.css";
import Icon1 from "../../assets/Icon1.svg";
import Icons2 from "../../assets/Icons2.svg";
import Icons3 from "../../assets/Icons3.svg";
import Icons4 from "../../assets/Icons4.svg";

const AchievementsSection = () => {
  return (
    <section className="awards-section">
      <div className="awards-container">
        <div className="awards-header">
          <h2>Our Achievements</h2>
          <p>
            For 25+ years, EEC has provided top-tier IELTS and test prep, setting benchmarks with
            quality training and personalised support.
          </p>
        </div>
      </div>

      <div className="awards-grid">
        <div className="awards-feature">
          <div className="awards-card pink">
            <div className="achievement-icon-wrapper">
              <div className="achievement-icon-inner">
                <img src={Icon1} alt="Icon1" />
              </div>
            </div>
            <h3>100,000+ Band Scores Delivered</h3>
            <p>
              Students from all walks of life have reached their dream scores with EEC's proven
              training methods.
            </p>
          </div>
        </div>

        <div className="awards-feature">
          <div className="awards-card blue">
            <div className="achievement-icon-wrapper">
              <div className="achievement-icon-inner">
                <img src={Icons2} alt="Icons2" />
              </div>
            </div>
            <h3>95%+ Student Satisfaction Rate</h3>
            <p>
              From the first class to the final mock test — our students trust us and it shows.
            </p>
          </div>
        </div>

        <div className="awards-feature">
          <div className="awards-card brown">
            <div className="achievement-icon-wrapper">
              <div className="achievement-icon-inner">
                <img src={Icons3} alt="Icons3" />
              </div>
            </div>
            <h3>25+ Years of Expertise</h3>
            <p>
              With decades of experience, our trainers and systems are refined to ensure high-impact
              results.
            </p>
          </div>
        </div>

        <div className="awards-feature">
          <div className="awards-card orange">
            <div className="achievement-icon-wrapper">
              <div className="achievement-icon-inner">
                <img src={Icons4} alt="Icons4" />
              </div>
            </div>
            <h3>Global University Admits</h3>
            <p>
              Our alumni have earned admits to top universities in the UK, Canada, USA, and Australia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
