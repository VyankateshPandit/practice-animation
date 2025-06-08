import React from "react";
import "./UpcomingEventCard.css";

const UpcomingEventCard = ({
  address,
  date,
  title,
  onButtonClick,
  buttonText = "Book A Slot Now",
  showInfo = true,
}) => (
  <div className="upcoming-event-card">
    <div className="event-meta">
      {address} • {date}
    </div>
    <div className="event-title-row">
      <span className="event-title">{title}</span>
      {showInfo && (
        <span className="info-icon">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#151515"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </span>
      )}
    </div>
    <button className="event-btn" onClick={onButtonClick}>
      {buttonText}
    </button>
  </div>
);

export default UpcomingEventCard; 