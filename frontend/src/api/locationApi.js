import axios from "axios";

export const getCoordinates = async (place, district, state) => {

    const queries = [
        `${place}, ${district}, ${state}`,
        `${place}, ${state}`,
        `${place}`
    ];

    for (const query of queries) {

        console.log("Searching:", query);

        const response = await axios.get(
            "https://nominatim.openstreetmap.org/search",
            {
                params: {
                    q: query,
                    format: "json",
                    limit: 1
                },
                headers: {
                    "Accept-Language": "en"
                }
            }
        );

        console.log("Nominatim Response:", response.data);

        if (response.data.length > 0) {
            return response.data;
        }
    }

    return [];
};