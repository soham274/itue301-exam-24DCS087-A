const mongoose = require('mongoose');

// Task 5: Doctor Schema with Validation Rules
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Doctor name is required']
  },
  email: {
    type: String
  },
  specialisation: {
    type: String,
    required: [true, 'Specialisation is required']
  },
  available: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Doctor', doctorSchema);
