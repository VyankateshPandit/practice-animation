import React, { useEffect, useState } from 'react';
import './HeroBanner.css';

import speaker1 from '../../../assets/speaker1.svg';
import speaker2 from '../../../assets/speaker2.svg';
import speaker3 from '../../../assets/speaker3.svg';
import speaker4 from '../../../assets/speaker4.svg';
// import speaker5 from './assets/speaker5.png';

const HeroBanner = () => {
  const images = [speaker1, speaker2, speaker3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-loop every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="about-us-container">
      <div className="about-us-text-wrapper">
        <div className="about-us-text-group">
          <h2 className="about-us-title">About us</h2>
          <p className="about-us-description">
            At <strong>EEC Global</strong>, we believe that language is the first step toward global opportunity. With over <strong>25 years of experience</strong> in <strong>IELTS</strong> and <strong>international test preparation</strong>, we’ve helped thousands of students turn their study-abroad dreams into reality. Our commitment to <strong>quality education</strong>, <strong>personalized mentorship</strong>, and <strong>result-driven strategies</strong> has made us a trusted name in the field. Whether you’re aiming for top scores or top universities — EEC is where your journey begins.
          </p>
        </div>
      </div>

      <div className="about-us-image-section">
        <img
          src={images[currentIndex]}
          alt={`EEC Speaker ${currentIndex + 1}`}
          className="about-us-photo"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
