const express = require('express');
const router = express.Router();
const subjectsController = require('../controllers/subjectsController');

// Rutas para las Materias
(express.Router()).get('/subjects', subjectsController.getAllSubjects);
(express.Router()).post('/subjects', subjectsController.createSubject);

module.exports = express.Router();