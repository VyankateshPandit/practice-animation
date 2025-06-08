// JoinJourney.jsx
import React, { useState } from 'react';
import './JoinJourney.css';
import CurvedJoinNow from './CurvedJoinNow.svg'; // SVG with curved "JOIN NOW"

const images = [
  'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg',
  'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg'
];

const JoinJourney = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="join-journey-container">
      <div className="image-circle">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`circle-img-${index}`}
            className={`circle-img pos-${index}`}
          />
        ))}
      </div>
      <div className="center-content">
        <h2 className="join-heading">Join the EEC Journey!</h2>
        <p className="join-subheading">
          See how dreams turn into realities—one visa, one admit, one success story at a time.
        </p>
        <div className="join-now-button" onClick={() => setExpanded(!expanded)}>
          <img src={CurvedJoinNow} alt="Join Now Button" />
        </div>
        {expanded && (
          <div className="expandable-content">
            <p>More success stories coming soon...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default JoinJourney;
