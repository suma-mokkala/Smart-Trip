const db = require("../config/db");

const saveTrip = (tripData) => {

    const sql = `
        INSERT INTO saved_trips
        (user_id, place, district, state, people, days, budget, travel_style, itinerary)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    return db.promise().query(sql, [
        tripData.user_id,
        tripData.place,
        tripData.district,
        tripData.state,
        tripData.people,
        tripData.days,
        tripData.budget,
        tripData.travel_style,
        JSON.stringify(tripData.itinerary)
    ]);
};


const getSavedTrips = (userId) => {

    const sql = `
        SELECT id, place, district, state, people, days, budget,
               travel_style, created_at
        FROM saved_trips
        WHERE user_id = ?
        ORDER BY created_at DESC
    `;

    return db.promise().query(sql, [userId]);
};


const getTripById = (tripId, userId) => {

    const sql = `
        SELECT *
        FROM saved_trips
        WHERE id = ? AND user_id = ?
    `;

    return db.promise().query(sql, [tripId, userId]);
};


module.exports = {
    saveTrip,
    getSavedTrips,
    getTripById
};