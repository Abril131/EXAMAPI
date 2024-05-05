const Tutor = require('../models/Tutor');

exports.getAllTutors = async () => {
  return await Tutor.find();
};

exports.createTutor = async (tutorData) => {
  const tutor = new Tutor(tutorData);
  return await tutor.save();
};
