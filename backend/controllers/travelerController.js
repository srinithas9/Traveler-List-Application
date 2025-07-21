const Traveler = require('../models/Traveler');

// Get all travelers
const getTravelers = async (req, res) => {
  try {
    const travelers = await Traveler.find();
    res.json(travelers);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch travelers.' });
  }
};

// Get traveler details by ID
const getTravelerById = async (req, res) => {
  try {
    const traveler = await Traveler.findById(req.params.id);
    res.json(traveler);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch traveler.' });
  }
};

// Add a traveler
const addTraveler = async (req, res) => {
  try {
    const traveler = new Traveler(req.body);
    const savedTraveler = await traveler.save();
    res.json(savedTraveler);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add traveler.' });
  }
};

// Delete a traveler
const deleteTraveler = async (req, res) => {
  try {
    await Traveler.findByIdAndDelete(req.params.id);
    res.json({ message: 'Traveler deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete traveler.' });
  }
};

module.exports = { getTravelers, getTravelerById, addTraveler, deleteTraveler };
