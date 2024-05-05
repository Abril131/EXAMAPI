const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    typr: String,
    required: true
  },
  subject: {
    type: String,
    required: truen
  },
});

module.exports = mongoose.model('Tutor', tutorSchema);
