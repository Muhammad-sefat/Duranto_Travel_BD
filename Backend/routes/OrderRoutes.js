const express = require("express");
const { placeOrder } = require("../controllers/OrderController");
const { getOrdersByEmail } = require("../controllers/OrderController");
const { getAllOrders } = require("../controllers/OrderController");

const router = express.Router();

// Route for placing an order
router.post("/place-order", placeOrder);
router.get("/:email", getOrdersByEmail);
router.get("/", getAllOrders);

module.exports = router;
