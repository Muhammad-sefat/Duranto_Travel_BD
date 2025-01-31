const Order = require("../models/Order");

// Controller to handle order placement
const placeOrder = async (req, res) => {
  try {
    const {
      name,
      guardianPhoneNumber,
      studentPhoneNumber,
      selectedSeats,
      busData,
      journeyDate,
      paymentMethod,
      transactionId,
      totalPrice,
      orderNotes,
    } = req.body;

    // Validate required fields
    if (
      !name ||
      !guardianPhoneNumber ||
      !studentPhoneNumber ||
      !selectedSeats.length ||
      !busData ||
      !journeyDate ||
      !paymentMethod ||
      !totalPrice
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Create a new order
    const newOrder = new Order({
      name,
      guardianPhoneNumber,
      studentPhoneNumber,
      selectedSeats,
      busData,
      journeyDate,
      paymentMethod,
      transactionId: paymentMethod !== "cash" ? transactionId : null,
      totalPrice,
      orderNotes,
    });

    // Save to the database
    const savedOrder = await newOrder.save();
    console.log(savedOrder);

    res
      .status(201)
      .json({ message: "Order placed successfully", order: savedOrder });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { placeOrder };
