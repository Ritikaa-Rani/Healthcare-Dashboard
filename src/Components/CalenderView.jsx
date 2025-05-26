import React from 'react';
import './CalenderView.css';

const CalendarView = () => {
  const weekDays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const dates = [
    { date: 25, times: ['10:00', '12:00'] },
    { date: 26, times: ['08:00', '09:00'], selected: true },
    { date: 27, times: ['12:00', '13:00'] },
    { date: 28, times: ['10:00', '11:00'] },
    { date: 29, times: ['14:00', '16:00'] },
    { date: 30, times: ['12:00', '15:00'] },
    { date: 31, times: ['09:00', '11:00'] },
  ];

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>October 2021</h2>
        <div className="nav-arrows">
          <span>&larr;</span>
          <span>&rarr;</span>
        </div>
      </div>

      <div className="calendar-grid">
        {weekDays.map((day, index) => (
          <div key={index} className="calendar-day">{day}</div>
        ))}

        {dates.map((day, idx) => (
          <div key={idx} className={`calendar-cell ${day.selected ? 'selected' : ''}`}>
            <div className="calendar-date">{day.date}</div>
            {day.times.map((time, i) => (
              <div key={i} className="calendar-time">{time}</div>
            ))}
          </div>
        ))}
      </div>

      <div className="appointments-cards">
        <div className="appointment dentist">
          <h4>Dentist 🦷</h4>
          <p>09:00–11:00</p>
          <small>Dr. Cameron Williamson</small>
        </div>
        <div className="appointment physio">
          <h4>Physiotherapy Appointment 💪</h4>
          <p>11:00–12:00</p>
          <small>Dr. Kevin Djones</small>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
