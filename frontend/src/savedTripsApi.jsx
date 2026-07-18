import axios from "./axios";

export const getSavedTrips = () => {
    return axios.get("/saved-trips", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
};