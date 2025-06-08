import React from "react";
import { useState } from "react";
import "./Calender.css";
import arrowLeft from "../../assets/chevron-left.svg";
import arrowRight from "../../assets/chevron-right.svg";
const Calendar = ({ onDateSelect, onCancel }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 3, 6));

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay() || 7;
  };

  const formatDate = (date) => {
    const options = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);

    const daysInPrevMonth = getDaysInMonth(currentYear, currentMonth - 1);

    const days = [];

    for (let i = firstDayOfMonth - 2; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        month: currentMonth - 1,
        year: currentYear,
        isCurrentMonth: false,
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        month: currentMonth,
        year: currentYear,
        isCurrentMonth: true,
      });
    }

    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        month: currentMonth + 1,
        year: currentYear,
        isCurrentMonth: false,
      });
    }

    return days;
  };

  const getMonthName = (date) => {
    return date.toLocaleDateString("en-US", { month: "long" });
  };

  const isToday = (day, month, year) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  const isSelectedDate = (day, month, year) => {
    return (
      day === selectedDate.getDate() &&
      month === selectedDate.getMonth() &&
      year === selectedDate.getFullYear()
    );
  };

  const handleDateClick = (day, month, year) => {
    const date = new Date(year, month, day);
    date.setHours(12);
    setSelectedDate(date);
  };

  const handleApply = () => {
    if (onDateSelect) {
      const formattedDate = selectedDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }); // e.g., "May 3, 2025"
      onDateSelect(formattedDate);
    }
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
  };

  const handleTodayClick = () => {
    const today = new Date();
    setSelectedDate(today);
    setCurrentDate(today);
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className="calendar-container">
      <div className="month-navigation">
        <button onClick={prevMonth} className="nav-button">
          <img src={arrowLeft} alt="" />
        </button>
        <h2 className="month-title">{getMonthName(currentDate)}</h2>
        <button onClick={nextMonth} className="nav-button">
          <img src={arrowRight} alt="" />
        </button>
      </div>

      <div className="date-display">
        <div className="selected-date">{formatDate(selectedDate)}</div>
        <button onClick={handleTodayClick} className="today-button">
          Today
        </button>
      </div>

      <div className="calendar-grid">
        <div className="weekday-header">
          <div>Mo</div>
          <div>Tu</div>
          <div>We</div>
          <div>Th</div>
          <div>Fr</div>
          <div>Sat</div>
          <div>Su</div>
        </div>

        <div className="days-grid">
          {calendarDays.map((dayInfo, index) => (
            <button
              key={index}
              onClick={() =>
                handleDateClick(dayInfo.day, dayInfo.month, dayInfo.year)
              }
              className={`day-button 
                ${!dayInfo.isCurrentMonth ? "other-month" : ""}
                ${
                  isSelectedDate(dayInfo.day, dayInfo.month, dayInfo.year)
                    ? "selected"
                    : ""
                }
                ${
                  isToday(dayInfo.day, dayInfo.month, dayInfo.year) &&
                  !isSelectedDate(dayInfo.day, dayInfo.month, dayInfo.year)
                    ? "today"
                    : ""
                }
              `}
            >
              {dayInfo.day}
            </button>
          ))}
        </div>
      </div>

      <div className="action-buttons">
        <button onClick={handleCancel} className="cancel-button">
          Cancel
        </button>
        <button onClick={handleApply} className="apply-button">
          Apply
        </button>
      </div>
    </div>
  );
};

export default Calendar;
