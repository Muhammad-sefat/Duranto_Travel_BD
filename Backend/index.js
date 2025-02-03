require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const busRoutes = require("./routes/busRoute");
const orderRoutes = require("./routes/OrderRoutes");

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
const corsOptions = {
  origin: ["https://durantotravelbd.web.app"],
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

// Database connection
connectDB();

// Error handling
app.use(errorHandler);

// Other middleware and setup
app.use("/api/buses", busRoutes);
app.use("/api/orders", orderRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("Hello, Server is Runing from Backend!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
