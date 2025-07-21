const mongoose = require('mongoose');

const travelerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  travelDate: { type: String, required: true },
}, { timestamps: true });  // This automatically adds createdAt & updatedAt fields

const Traveler = mongoose.model('Traveler', travelerSchema);

module.exports = Traveler;
