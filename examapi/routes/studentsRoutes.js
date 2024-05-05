const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController');

// Rutas para los Alumnos
router.get('/students', studentsController.getAllStudents);
router.post('/students', studentsController.createStudent);

module.exports = router;
