const Bus = require("../models/busModel");

const getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.find(); // Fetch all data from `busData` collection
    res.status(200).json(buses); // Send the data to the frontend
  } catch (error) {
    console.error("Error fetching bus data:", error);
    res.status(500).json({ error: "Failed to fetch bus data" });
  }
};

module.exports = { getAllBuses };
