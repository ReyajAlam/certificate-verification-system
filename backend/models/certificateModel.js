const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  certificateId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  issuedDate: {
    type: Date,
    default: Date.now
  }
});

const Certificate = mongoose.model('Certificate', certificateSchema);
module.exports = Certificate;
