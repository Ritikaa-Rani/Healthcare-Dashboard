import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import './UpcomingSchedule.css';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule-container">
      <h2 className="schedule-title">The Upcoming Schedule</h2>

      <div className="schedule-day-group">
        <div className="schedule-day">On Thursday</div>
        <div className="schedule-cards">
          <SimpleAppointmentCard title="Health checkup complete" time="11:00 AM" emoji="💉" />
          <SimpleAppointmentCard title="Ophthalmologist" time="14:00 PM" emoji="👁️" />
        </div>
      </div>

      <div className="schedule-day-group">
        <div className="schedule-day">On Saturday</div>
        <div className="schedule-cards">
          <SimpleAppointmentCard title="Cardiologist" time="12:00 AM" emoji="❤️" />
          <SimpleAppointmentCard title="Neurologist" time="16:00 PM" emoji="🧑‍⚕️" />
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
