const Tutor = require('../models/Tutor');
const tutorService = require('../services/tutorService');

exports.getAllTutors = async (req, res) => {
  try {
    const tutors = await tutorService.getAllTutors();
    res.json(tutors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTutor = async (req, res) => {
  try {
    const newTutor = await tutorService.createTutor(req.body);
    res.status(201).json(newTutor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};