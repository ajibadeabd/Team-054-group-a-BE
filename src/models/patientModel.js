const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientModel = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Name is required'],
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'others'],
    trim: true,
    required: [true, 'Gender is required'],
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'Description is required'],
  },
  symptoms: {
    type: [String],
    required: false,
    default: null,
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    default: null,
  },
  genotype: {
    type: String,
    enum: ['AA', 'AS', 'SS', 'AC'],
    default: null,
  },
  height: {
    type: Number,
    default: null,
  },
  weight: {
    type: Number,
    default: null,
  },
  bloodPressure: {
    type: Number,
    default: null,
  },
  temperature: {
    type: Number,
    default: null,
  },
  sugarLevel: {
    type: Number,
    default: null,
  },
  pulse: {
    type: Number,
    default: null,
  },
});

module.exports = mongoose.model('patients', patientModel);
