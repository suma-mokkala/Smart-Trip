const db = require("../config/db");

// Create a new trip
const createTrip = (req, res) => {

    const {
        destination,
        start_date,
        end_date,
        days,
        adults,
        children,
        budget,
        travel_style,
        interests,
        itinerary
    } = req.body;

    const user_id = req.user.id;

    const sql = `
        INSERT INTO trips
        (
            user_id,
            destination,
            start_date,
            end_date,
            days,
            adults,
            children,
            budget,
            travel_style,
            interests,
            itinerary
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            user_id,
            destination,
            start_date,
            end_date,
            days,
            adults,
            children,
            budget,
            travel_style,
            interests,
            JSON.stringify(itinerary)
        ],
        (err, result) => {

            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: false,
                    message: "Error creating trip"
                });
            }

            res.status(201).json({
                success: true,
                message: "Trip created successfully",
                tripId: result.insertId
            });

        }
    );
};

// Get all trips of logged-in user
const getTrips = (req, res) => {

    const user_id = req.user.id;

    const sql = `
        SELECT *
        FROM trips
        WHERE user_id = ?
        ORDER BY created_at DESC
    `;

    db.query(sql, [user_id], (err, results) => {

        if (err) {
            console.error(err);

            return res.status(500).json({
                success: false,
                message: "Error fetching trips"
            });
        }

        res.status(200).json({
            success: true,
            count: results.length,
            trips: results
        });

    });

};
// Delete Trip
const deleteTrip = (req, res) => {

    const user_id = req.user.id;
    const tripId = req.params.id;

    const sql = `
        DELETE FROM trips
        WHERE id = ? AND user_id = ?
    `;

    db.query(sql, [tripId, user_id], (err, result) => {

        if (err) {
            console.error(err);

            return res.status(500).json({
                success: false,
                message: "Error deleting trip"
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "Trip not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Trip deleted successfully"
        });

    });

};
// Get a single trip by ID
const getTripById = (req, res) => {

    const user_id = req.user.id;
    const tripId = req.params.id;

    const sql = `
        SELECT *
        FROM trips
        WHERE id = ? AND user_id = ?
    `;

    db.query(sql, [tripId, user_id], (err, results) => {

        if (err) {
            console.error(err);

            return res.status(500).json({
                success: false,
                message: "Error fetching trip"
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Trip not found"
            });
        }

        res.status(200).json({
            success: true,
            trip: results[0]
        });

    });

};

module.exports = {

    
    createTrip,
    getTrips,
    getTripById,
    deleteTrip
};