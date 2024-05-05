const express = require('express');
const router = express.Router();
const tutorsController = require('../controllers/tutorsController');

router.get('/tutors', tutorsController.getAllTutors);
router.post('/tutors', tutorsController.createTutor);

module.exports = router;