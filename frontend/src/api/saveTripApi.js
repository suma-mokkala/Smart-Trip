import axios from "./axios";

// Save Trip
export const saveTrip = (tripData) => {
    return axios.post("/saved-trips", tripData, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
};

// Get All Saved Trips
export const getSavedTrips = () => {
    return axios.get("/saved-trips", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
};

// Get One Saved Trip
export const getSavedTripDetails = (id) => {
    return axios.get(`/saved-trips/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
};