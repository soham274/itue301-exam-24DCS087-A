// Express Server for Hospital Appointment System
// Covers Practical 4 (Task 3: REST API & Middleware)

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON body parsing
app.use(cors());
app.use(express.json());

// ==========================================
// TASK 3: CUSTOM REQUEST LOGGER MIDDLEWARE
// ==========================================
// Must log every request in format: [METHOD] [PATH] [TIMESTAMP]
const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${req.method}] ${req.path} [${timestamp}]`);
  next();
};

// Apply requestLogger globally
app.use(requestLogger);

// ==========================================
// IN-MEMORY DATA STORAGE FOR TASK 3 & TASK 4
// ==========================================
let doctors = [
  { id: 1, name: "Dr. Sarah Smith", specialisation: "Cardiology", available: true },
  { id: 2, name: "Dr. John Doe", specialisation: "Neurology", available: false },
  { id: 3, name: "Dr. Emily Brown", specialisation: "Pediatrics", available: true }
];

let appointments = [
  { id: 1, patientName: "Rahul Sharma", doctorName: "Dr. Sarah Smith", date: "2026-08-25", timeSlot: "10:00 AM", status: "confirmed" },
  { id: 2, patientName: "Priya Patel", doctorName: "Dr. John Doe", date: "2026-08-26", timeSlot: "02:30 PM", status: "pending" }
];

// ==========================================
// TASK 3 REST API ENDPOINTS
// ==========================================

// 1. GET /api/v1/appointments -> Return all appointments
app.get('/api/v1/appointments', (req, res) => {
  res.status(200).json(appointments);
});

// 2. POST /api/v1/appointments -> Create a new appointment
app.post('/api/v1/appointments', (req, res) => {
  const { patientName, doctorName, date, timeSlot, status } = req.body;
  const newAppointment = {
    id: appointments.length + 1,
    patientName: patientName || "Guest Patient",
    doctorName: doctorName || "General Physician",
    date: date || new Date().toISOString().split('T')[0],
    timeSlot: timeSlot || "09:00 AM",
    status: status || "pending"
  };
  appointments.push(newAppointment);
  res.status(201).json(newAppointment);
});

// 3. GET /api/v1/doctors -> Return all doctors (Consumed by React DoctorsPage in Task 4)
app.get('/api/v1/doctors', (req, res) => {
  res.status(200).json(doctors);
});

// Demo endpoint to trigger 500 error for testing error middleware
app.get('/api/v1/error-test', (req, res, next) => {
  const err = new Error("Simulated Server Error");
  next(err);
});

// ==========================================
// GLOBAL ERROR HANDLING MIDDLEWARE
// Must be the LAST middleware in the application
// ==========================================
app.use((err, req, res, next) => {
  console.error("Global Error Caught:", err.message);
  res.status(500).json({
    message: "Internal Server Error"
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
