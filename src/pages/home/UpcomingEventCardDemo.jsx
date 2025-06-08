 import React from "react";
 import UpcomingEventCard from "../../components/UpcomingEventCard";
 import arrowLeft from "../../../assets/arrowleft.svg"; 
 import arrowRight from "../../../assets/arrowright.svg";

 const UpcomingEventCardDemo = () => (
  <div style={{
   minHeight: "100vh",
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
    justifyContent: "center",
    background: "#f2f2f2"
  }}>
   <div style={{ maxWidth: 520, textAlign: "center", marginBottom: 32 }}>
       <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
         Don't Miss Our Upcoming Events
       </h2>
       <div style={{ fontSize: 18, color: "#444", marginBottom: 4 }}>
         Join live webinars, Q&A sessions, and expert panels
       </div>
       <div style={{ fontSize: 18, color: "#444" }}>
         stay ahead in your study abroad journey.
       </div>
     </div>
     <UpcomingEventCard
       address="Address"
       date="18 April, 2025"
      title="Under Grads: Seminar on Under Graduate Admissions Process"
      buttonText="Book A Slot Now"
       onButtonClick={() => alert("Slot booked!")}
     />
     <div style={{ display: "flex", gap: 32, marginTop: 32, justifyContent: "center", alignItems: "center" }}>
       <img src={arrowLeft} alt="Previous" style={{ cursor: "pointer", width: 48, height: 48 }} />
       <img src={arrowRight} alt="Next" style={{ cursor: "pointer", width: 48, height: 48 }} />
     </div>
   </div>
 );

 export default UpcomingEventCardDemo;
