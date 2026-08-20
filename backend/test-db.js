// Task 5 Demonstration Script: MongoDB Schema & Validation Testing
// Run this script using: node test-db.js

require('dotenv').config();
const mongoose = require('mongoose');
const Patient = require('./models/Patient');
const Doctor = require('./models/Doctor');
const Appointment = require('./models/Appointment');

async function testMongo() {
  const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/hospital_db';
  console.log('Connecting to MongoDB at:', mongoUri);

  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB successfully!\n');

    // 1. Successful MongoDB Operation: Create Patient & Doctor
    console.log('--- 1. Testing Valid Schema Operation ---');
    const doctor = new Doctor({
      name: 'Dr. Anita Sharma',
      email: 'anita@medcare.com',
      specialisation: 'Dermatology',
      available: true
    });
    const savedDoctor = await doctor.save();
    console.log('Doctor Created Successfully:', savedDoctor._id, savedDoctor.name);

    const patient = new Patient({
      name: 'Rohan Mehta',
      email: `rohan.${Date.now()}@example.com`,
      phone: '9876543210',
      bloodGroup: 'O+',
      age: 28
    });
    const savedPatient = await patient.save();
    console.log('Patient Created Successfully:', savedPatient._id, savedPatient.name);

    // Create Appointment with References
    const appointment = new Appointment({
      patientId: savedPatient._id,
      doctorId: savedDoctor._id,
      date: '2026-09-01',
      timeSlot: '11:00 AM',
      status: 'pending',
      reason: 'Routine skin checkup'
    });
    const savedAppointment = await appointment.save();
    console.log('Appointment Created Successfully with References:', savedAppointment._id);

    // 2. Validation Failure Demonstration
    console.log('\n--- 2. Testing Validation Failure (Invalid Blood Group) ---');
    try {
      const invalidPatient = new Patient({
        name: 'Invalid User',
        email: 'invalid@example.com',
        bloodGroup: 'Z+' // INVALID: not in enum ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
      });
      await invalidPatient.save();
    } catch (valErr) {
      console.log('Caught Validation Error as expected:');
      console.log('Error Message:', valErr.message);
    }

  } catch (err) {
    console.error('Error during MongoDB test:', err.message);
  } finally {
    await mongoose.disconnect();
    console.log('\nDisconnected from MongoDB.');
  }
}

testMongo();
