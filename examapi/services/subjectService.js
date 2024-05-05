const Subject = require('../models/Subject');

exports.getAllSubjects = async () => {
  return await Subject.find();
};

exports.createSubject = async (subjectData) => {
  const subject = new Subject(subjectData);
  return await subject.save();
};