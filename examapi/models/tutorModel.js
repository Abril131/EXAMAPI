const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  // Otros campos relacionados con los tutores
});

module.exports = mongoose.model('Tutor', tutorSchema);

