const express = require("express");
const router = express.Router();

const {
    createTrip,
    getTrips,
    getTripById,
    deleteTrip
} = require("../controllers/tripController");

const verifyToken = require("../middleware/authMiddleware");

// Create Trip
router.post("/", verifyToken, createTrip);

// Get All Trips
router.get("/", verifyToken, getTrips);

// Get Trip By ID
router.get("/:id", verifyToken, getTripById);


router.delete("/:id", verifyToken, deleteTrip);

module.exports = router;