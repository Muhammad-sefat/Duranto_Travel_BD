const SeatReservation = require("../models/SeatModel");

// Save selected seats
const reserveSeats = async (req, res) => {
  const { email, busId, selectedSeats, journeyDate } = req.body;

  try {
    // Check if the user already has a reservation for this bus and date
    let reservation = await SeatReservation.findOne({
      email,
      busId,
      journeyDate,
    });

    if (reservation) {
      // Update existing reservation
      reservation.selectedSeats = selectedSeats;
    } else {
      // Create a new reservation
      reservation = new SeatReservation({
        email,
        busId,
        selectedSeats,
        journeyDate,
      });
    }

    await reservation.save();
    res.json({ success: true, reservation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get reservation by email, busId, and journeyDate
const getReservation = async (req, res) => {
  const { email, busId, journeyDate } = req.params;

  try {
    const reservation = await SeatReservation.findOne({
      email,
      busId,
      journeyDate,
    });

    if (!reservation) {
      return res.json({ selectedSeats: [] });
    }

    res.json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { reserveSeats, getReservation };
