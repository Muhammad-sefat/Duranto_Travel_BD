const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  busName: { type: String, required: true },
  departureTime: { type: String, required: true },
  arrivalTime: { type: String, required: true },
  ticketPrice: { type: Number, required: true },
  availableSeats: { type: Number, required: true },
});

module.exports = mongoose.model("Bus", busSchema);
