const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const savedTripRoutes = require("./routes/savedTripRoutes");
// Database
require("./config/db");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const tripRoutes = require("./routes/tripRoutes");
const aiRoutes = require("./routes/aiRoutes");
// JWT Middleware
const verifyToken = require("./middleware/authMiddleware"); // change if your filename is different

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/ai", aiRoutes);
// Home Route
app.use("/api/saved-trips", savedTripRoutes);
app.get("/", (req, res) => {
    res.json({
        message: "AI Travel Planner Backend Running Successfully 🚀"
    });
});

// Protected Route
app.get("/api/profile", verifyToken, (req, res) => {
    res.json({
        success: true,
        message: "Protected Route Accessed Successfully",
        user: req.user
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});