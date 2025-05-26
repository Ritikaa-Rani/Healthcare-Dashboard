import React from 'react';
import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time, emoji }) => {
  return (
    <div className="appointment-card">
      <div className="appointment-title">
        {title} <span>{emoji}</span>
      </div>
      <div className="appointment-time">{time}</div>
    </div>
  );
};

export default SimpleAppointmentCard;
