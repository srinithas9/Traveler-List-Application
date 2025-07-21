const express = require('express');
const router = express.Router();

const {
  getTravelers,
  addTraveler,
  deleteTraveler,
  getTravelerById
} = require('../controllers/travelerController');

// Routes
router.get('/', getTravelers);
router.post('/', addTraveler);
router.delete('/:id', deleteTraveler);
router.get('/:id', getTravelerById);   // <-- Add this line (Detail route)

module.exports = router;
