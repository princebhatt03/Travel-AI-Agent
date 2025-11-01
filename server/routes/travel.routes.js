const express = require('express');
const router = express.Router();
const { generateTravelPlan } = require('../controllers/travel.controller');

// Route: POST /api/travel/plan
router.post('/plan', generateTravelPlan);

module.exports = router;
