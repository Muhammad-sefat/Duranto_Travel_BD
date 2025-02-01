const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    guardianPhoneNumber: { type: String, required: true },
    studentPhoneNumber: { type: String, required: true },
    selectedSeats: [
      {
        seatNumber: { type: String, required: true },
        type: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
    busData: {
      from: { type: String, required: true },
      to: { type: String, required: true },
      price: { type: Number, required: true },
    },
    journeyDate: { type: Date, required: true },
    paymentMethod: { type: String, required: true },
    transactionId: { type: String },
    totalPrice: { type: Number, required: true },
    orderNotes: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
