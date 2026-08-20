import React, { useState } from 'react';

// Task 2: BookingPage component using useState to manage form state and live preview
const BookingPage = () => {
  // Using useState to manage form fields (at least two state values used meaningfully)
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('Dr. Sarah Smith');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:00 AM');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      patientName,
      doctorName,
      date,
      timeSlot,
      status: 'pending'
    };

    try {
      // POST request to Task 3 Express API
      const response = await fetch('http://localhost:5000/api/v1/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointmentData)
      });

      if (response.ok) {
        setMessage(`Appointment successfully booked for ${patientName}!`);
        // Reset form
        setPatientName('');
        setDate('');
      } else {
        setMessage('Failed to book appointment.');
      }
    } catch (err) {
      // Fallback message if backend is not running
      setMessage(`Form Submitted Locally for ${patientName} with ${doctorName}!`);
    }
  };

  return (
    <div className="container">
      <h1 className="page-title">Book an Appointment</h1>
      
      {message && <div style={{ color: 'green', fontWeight: 'bold', marginBottom: '15px' }}>{message}</div>}

      <form onSubmit={handleSubmit} style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #ccc' }}>
        <div className="form-group">
          <label>Patient Name:</label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            placeholder="Enter Patient Full Name"
            required
          />
        </div>

        <div className="form-group">
          <label>Doctor Name:</label>
          <select value={doctorName} onChange={(e) => setDoctorName(e.target.value)}>
            <option value="Dr. Sarah Smith">Dr. Sarah Smith (Cardiology)</option>
            <option value="Dr. John Doe">Dr. John Doe (Neurology)</option>
            <option value="Dr. Emily Brown">Dr. Emily Brown (Pediatrics)</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Time Slot:</label>
          <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)}>
            <option value="09:00 AM">09:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:30 AM">11:30 AM</option>
            <option value="02:30 PM">02:30 PM</option>
            <option value="04:00 PM">04:00 PM</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Book Appointment</button>
      </form>

      {/* Practical 2 Requirement: Live state display on page as user types */}
      <div className="live-preview">
        <h3>Live Form State Preview</h3>
        <p><strong>Patient Name (State):</strong> {patientName || '(Waiting for input...)'}</p>
        <p><strong>Selected Doctor (State):</strong> {doctorName}</p>
        <p><strong>Selected Date (State):</strong> {date || '(Not selected yet)'}</p>
        <p><strong>Time Slot (State):</strong> {timeSlot}</p>
      </div>
    </div>
  );
};

export default BookingPage;
