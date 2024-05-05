const Tutor = require('../models/tutorModel');

exports.getAllTutors = async () => {
  return await Tutor.find();
};

exports.createTutor = async (tutorData) => {
  const tutor = new Tutor(tutorData);
  return await tutor.save();
};
