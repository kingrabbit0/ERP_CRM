const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const customerSchema = new mongoose.Schema({
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
  name: {
    type: String,
    trim: true,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Customer', customerSchema);
