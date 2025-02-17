const mongoose = require("mongoose");

const seatReservationSchema = new mongoose.Schema({
  email: { type: String, required: true },
  busId: { type: mongoose.Schema.Types.ObjectId, ref: "Bus", required: true },
  selectedSeats: [
    {
      seatNumber: String,
      type: String,
      price: Number,
    },
  ],
  journeyDate: { type: Date, required: true },
});

const SeatReservation = mongoose.model(
  "SeatReservation",
  seatReservationSchema
);
module.exports = SeatReservation;
