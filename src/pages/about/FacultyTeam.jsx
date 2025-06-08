import React from "react";
import "./FacultyTeam.css";
import girl from "../../../assets/faculty-team.png";
import girlBg from "../../../assets/background.svg";
import badge from "../../../assets/Badge.svg";
import ribbon from "../../../assets/Ribbons.svg";

const teamMembers = [
  {
    name: "Mr. Rajeev Sharma",
    role: "IELTS Head Trainer",
    details:
      "15+ years of experience | British Council & IDP Certified | Known for advanced writing strategies",
  },
  {
    name: "Ms. Priya Mehta",
    role: "Senior Trainer",
    details:
      "8+ years training experience | Student-favorite for speaking and listening modules",
  },
  {
    name: "Ms. Richa Jain",
    role: "Academic Counselor",
    details:
      "Guides students through test prep timelines, study plans, and university shortlisting",
  },
  {
    name: "Ms. Ananya Verma",
    role: "IELTS Strategist",
    details:
      "Specializes in Reading and Listening sections | Has trained 1000+ students to achieve high band scores",
  },
];

const FacultyTeam = () => {
  return (
    <div className="faculty-team-section">
      <div className="section-content">
        <h2 className="section-title">Meet Our Faculty & Team</h2>
        <p className="section-description">
          Behind every great score is a great mentor. At EEC, our team is made up of certified
          professionals, passionate educators, and counselors who care about your growth as much
          as your grades.
        </p>
      </div>

      <div className="faculty-team-container">
        {teamMembers.map((member, index) => (
          <div
  className={`faculty-card ${index % 2 === 0 ? "align-left" : "align-right"}`}
  key={index}
>
  {/* Image */}
  <div className="image-wrapper">
    <div className="image-container">
      <img src={girlBg} alt="Background" className="girl-bg" />
      <img src={girl} alt={`${member.name}'s photo`} className="girl" />
    </div>

    {/* ✅ Move clip-wrapper INSIDE image-wrapper */}
    <div className="clip-wrapper">
      <img src={ribbon} alt="Ribbon" className="ribbon" />
      <img src={badge} alt="Badge" className="badge" />
      <div className="badge-text">
        <div className="score">8.5</div>
        <div className="label">BAND TRAINER</div>
        </div>
    </div>
  </div>

  {/* Content */}
  <div className="info-wrapper">
    <div className="info-container">
      <h3>{member.name}</h3>
      <p className="role">{member.role}</p>
      <p className="details">{member.details}</p>
    </div>
  </div>
</div>
        ))}
      </div>
    </div>
  );
};

export default FacultyTeam;
