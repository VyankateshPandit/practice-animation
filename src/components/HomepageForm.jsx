import React, { useState, useRef } from "react";
import "./HomepageForm.css";
import CalendarIcon from "../../assets/calender_icon.svg";
import Calendar from "./Calender";

function HomepageForm() {
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef(null);

  const [formData, setFormData] = useState({
    date: "May 3, 2025",
    timeSlot: "10 AM-11 AM",
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    location: "",
    message: "",
    notifications: false,
  });

  // Your handleChange function should already handle both fields if it uses event.target.name
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  const handleCalendarCancel = () => {
    setShowCalendar(false);
  };
  const handleDateSelect = (selectedDate) => {
    setFormData({
      ...formData,
      date: selectedDate,
    });
    setShowCalendar(false);
  };

  const handleClickOutside = (e) => {
    if (calendarRef.current && !calendarRef.current.contains(e.target)) {
      setShowCalendar(false);
    }
  };

  React.useEffect(() => {
    if (showCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCalendar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="form-container">
      <div className="form-text-section">
        <h3 className="form-heading">Take the First Step Today!</h3>
        <p className="form-tagline">
          Still unsure? Talk to an expert or attend a free demo session.
        </p>
      </div>
      <div className="form-content">
        <div className="form-fields-wrapper">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Date*</label>
              <div
                className="date-display"
                onClick={toggleCalendar}
                style={{
                  padding: "12px 16px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontFamily: "Inter",
                  color: "#5B5B5B",
                  cursor: "pointer",
                  position: "relative",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="date-value">{formData.date}</div>
                <span className="calendar-icon">
                  <img src={CalendarIcon} alt="" />
                </span>
              </div>
              {showCalendar && (
                <div
                  className="calendar-wrapper"
                  ref={calendarRef}
                  style={{
                    position: "fixed", // changed from absolute to fixed
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 9999,
                    borderRadius: "8px",
                    padding: "16px", // optional for spacing
                  }}
                >
                  <Calendar
                    onDateSelect={handleDateSelect}
                    onCancel={handleCalendarCancel}
                  />
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="timeSlot">Time Slot*</label>
              <div className="select-container">
                <select
                  id="timeSlot"
                  className="FormDropDowns"
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  required
                  placeholder="Select time"
                >
                  <option value="10 AM-11 AM">10 AM-11 AM</option>
                  <option value="11 AM-12 PM">11 AM-12 PM</option>
                  <option value="12 PM-1 PM">12 PM-1 PM</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="fullName">Enter Full Name*</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Enter Email Address*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone number*</label>
            <div className="phone-input-container">
              <select
                name="countryCode"
                value={formData.countryCode || "+91"}
                onChange={handleChange}
                className="country-code-select"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+86">+86</option>
                <option value="+81">+81</option>
                <option value="+49">+49</option>
                <option value="+33">+33</option>
                <option value="+39">+39</option>
                <option value="+34">+34</option>
                <option value="+61">+61</option>
                <option value="+55">+55</option>
                <option value="+7">+7</option>
                <option value="+82">+82</option>
                <option value="+31">+31</option>
                <option value="+46">+46</option>
              </select>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="000 000 0000"
                value={formData.phone}
                onChange={handleChange}
                required
                className="phone-number-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="location">Preferred Location*</label>
            <div className="select-container">
              <select
                id="location"
                className="FormDropDowns"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Branch
                </option>
                <option value="Downtown Branch">Branch 1</option>
                <option value="Downtown Branch">Branch 2</option>
                <option value="South City Branch">Branch 3</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button onClick={handleSubmit} className="submit-btn">
            Book a Demo Class
          </button>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              checked={formData.notifications}
              onChange={handleChange}
            />
            <label htmlFor="notifications">
              I authorize EEC to send notifications via{" "}
              <span className="highlight">SMS/RCS/WhatsApp</span>.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomepageForm;
