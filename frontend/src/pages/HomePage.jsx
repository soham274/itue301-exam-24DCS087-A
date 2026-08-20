import React from 'react';
import AppointmentCard from '../components/AppointmentCard';

// Task 1: HomePage displaying appointment cards using props
const HomePage = () => {
  // Parent data passed as props to AppointmentCard
  const sampleAppointments = [
    {
      id: 1,
      patientName: "Rahul Sharma",
      doctorName: "Dr. Sarah Smith",
      date: "2026-08-25",
      timeSlot: "10:00 AM",
      status: "confirmed"
    },
    {
      id: 2,
      patientName: "Priya Patel",
      doctorName: "Dr. John Doe",
      date: "2026-08-26",
      timeSlot: "02:30 PM",
      status: "pending"
    },
    {
      id: 3,
      patientName: "Amit Kumar",
      doctorName: "Dr. Emily Brown",
      date: "2026-08-27",
      timeSlot: "11:15 AM",
      status: "cancelled"
    }
  ];

  return (
    <div className="container">
      <h1 className="page-title">Hospital Appointment Dashboard</h1>
      <p>Welcome to MedCare Hospital Appointment System.</p>
      
      <h2>Upcoming Appointments</h2>
      <div className="card-grid">
        {sampleAppointments.map((app) => (
          <AppointmentCard
            key={app.id}
            patientName={app.patientName}
            doctorName={app.doctorName}
            date={app.date}
            timeSlot={app.timeSlot}
            status={app.status}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
