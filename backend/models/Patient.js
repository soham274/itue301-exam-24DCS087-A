const mongoose = require('mongoose');

// Task 5: Patient Schema with Validation Rules
const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Patient name is required']
  },
  email: {
    type: String,
    required: [true, 'Patient email is required'],
    unique: true
  },
  phone: {
    type: String
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not a valid blood group'
    }
  },
  age: {
    type: Number
  }
});

module.exports = mongoose.model('Patient', patientSchema);
