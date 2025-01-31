const express = require("express");
const { placeOrder } = require("../controllers/OrderController");

const router = express.Router();

// Route for placing an order
router.post("/place-order", placeOrder);

module.exports = router;
