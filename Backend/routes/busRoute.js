const express = require("express");
const { getAllBuses } = require("../controllers/busController");

const router = express.Router();

router.get("/", getAllBuses);

module.exports = router;
