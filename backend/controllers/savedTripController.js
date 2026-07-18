const {
    saveTrip,
    getSavedTrips,
    getTripById
} = require("../models/savedTripModel");


// Save Trip
const saveUserTrip = async (req, res) => {

    try {

        const userId = req.user.id;

        const tripData = {
            user_id: userId,
            ...req.body
        };

        await saveTrip(tripData);

        res.status(201).json({
            success: true,
            message: "Trip saved successfully."
        });

    } catch (error) {

        console.error("Save Trip Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to save trip."
        });

    }

};



// Get all saved trips of logged-in user
const getUserSavedTrips = async (req, res) => {

    try {

        const userId = req.user.id;

        const [trips] = await getSavedTrips(userId);

        res.status(200).json({

            success: true,
            trips

        });


    } catch (error) {

        console.error("Fetch Saved Trips Error:", error);

        res.status(500).json({

            success:false,
            message:"Failed to fetch saved trips."

        });

    }

};



// Get single saved trip
const getTripDetails = async (req, res) => {

    try {

        const userId = req.user.id;
        const tripId = req.params.id;


        const [trip] = await getTripById(
            tripId,
            userId
        );


        if(trip.length === 0){

            return res.status(404).json({

                success:false,
                message:"Trip not found."

            });

        }


        res.status(200).json({

            success:true,
            trip:trip[0]

        });



    } catch(error){

        console.error("Get Trip Details Error:", error);


        res.status(500).json({

            success:false,
            message:"Server Error"

        });

    }

};



module.exports = {

    saveUserTrip,
    getUserSavedTrips,
    getTripDetails

};