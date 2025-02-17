const express = require("express");
const {
  reserveSeats,
  getReservation,
} = require("../controllers/SeatController");

const router = express.Router();

// Define the seat reservation routes
router.post("/reserve-seats", reserveSeats);
router.get("/get-reservation/:email/:busId/:journeyDate", getReservation);

module.exports = router;
