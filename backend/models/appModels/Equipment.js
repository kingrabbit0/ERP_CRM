const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const equipmentSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  id: {
    type: Number,
    required: true,
  },
  customer_id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  serial_number: {
    type: String,
    trim: true,
    required: true,
  },
  calibration_interval: {
    type: String,
    trim: true,
    required: true,
  },
  last_calibration_date: {
    type: String,
    trim: true,
    required: true,
  },
  next_calibration_date: {
    type: String,
    trim: true,
    required: true,
  },
  contact_id: {
    type: String,
    trim: true,
    required: true,
  },
  status: {
    type: String,
    trim: true,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Equipment', equipmentSchema);
