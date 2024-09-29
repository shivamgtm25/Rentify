const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config(); // Loads environment variables from .env file
const cors = require("cors");

// Import route handlers
const authRoutes = require("./routes/auth.js");
const listingRoutes = require("./routes/listing.js");
const bookingRoutes = require("./routes/booking.js");
const userRoutes = require("./routes/user.js");

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // Serve static files from the 'public' directory

// API routes
app.use("/auth", authRoutes);
app.use("/properties", listingRoutes);
app.use("/bookings", bookingRoutes);
app.use("/users", userRoutes);

// Define the server port
const PORT = process.env.PORT || 3001;

// Validate MONGO_URI and handle connection
const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  console.error("MONGO_URI is not defined in the .env file");
  process.exit(1); // Exit the process if MONGO_URI is not defined
}

mongoose
  .connect(mongoUri, { dbName: "Rentify_db" })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
    process.exit(1); // Exit the process with failure
  });

// Export JWT_SECRET for use in authentication (if needed elsewhere in the project)
module.exports = { JWT_SECRET: process.env.JWT_SECRET };
