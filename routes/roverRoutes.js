const express = require('express');
const router = express.Router();
const roverController = require('../controllers/roverController');

router.post('/navigate-rovers', roverController.navigateRovers);

module.exports = router;
