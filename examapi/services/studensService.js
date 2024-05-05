const Student = require('../models/studentModel');

exports.getAllStudents = async () => {
  return await Student.find();
};

exports.createStudent = async (studentData) => {
  const student = new Student(studentData);
  return await student.save();
};