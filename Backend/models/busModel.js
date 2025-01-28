const mongoose = require("mongoose");

const busSchema = new mongoose.Schema(
  {
    from: { type: String, required: true },
    to: { type: String, required: true },
    unit: { type: String, required: true },
    busType: { type: String, required: true },
    journeyDate: { type: Date, required: true },
    examDate: { type: Date, required: true },
    boardingTime: { type: String, required: true },
    dropingTime: { type: String, required: true },
    duration: { type: String, required: true },
    seatType: { type: String, required: true },
    price: { type: Number, required: true },
    capacity: { type: Number, required: true },
  },
  {
    collection: "BusData",
  }
);

module.exports = mongoose.model("Bus", busSchema);
