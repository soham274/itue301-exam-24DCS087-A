import React from 'react';

// Task 1: AppointmentCard Component receiving 5 props
const AppointmentCard = ({ patientName, doctorName, date, timeSlot, status }) => {
  // Determine dynamic CSS class based on status prop (confirmed, pending, cancelled)
  const statusClass = status ? status.toLowerCase() : 'pending';

  return (
    <div className="appointment-card">
      <h3>Patient: {patientName}</h3>
      <div className="card-field">
        <strong>Doctor:</strong> {doctorName}
      </div>
      <div className="card-field">
        <strong>Date:</strong> {date}
      </div>
      <div className="card-field">
        <strong>Time Slot:</strong> {timeSlot}
      </div>
      <div className="card-field">
        <strong>Status:</strong>{' '}
        <span className={`status-badge ${statusClass}`}>
          {status}
        </span>
      </div>
    </div>
  );
};

export default AppointmentCard;
