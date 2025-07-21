const mongoose = require('mongoose');

const travelerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  travelDate: { type: Date, required: true },   // ✅ Add this line
}, { timestamps: true });

const Traveler = mongoose.model('Traveler', travelerSchema);

module.exports = Traveler;
