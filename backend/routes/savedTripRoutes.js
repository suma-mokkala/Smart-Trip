const express = require("express");
const router = express.Router();

const {
    saveUserTrip,
    getUserSavedTrips,
    getTripDetails
} = require("../controllers/savedTripController");

const authMiddleware = require("../middleware/authMiddleware");


router.post("/", authMiddleware, saveUserTrip);

router.get("/", authMiddleware, getUserSavedTrips);

router.get("/:id", authMiddleware, getTripDetails);


module.exports = router;