const { generateTrip } = require("../services/aiService");


const generateItinerary = async(req,res)=>{

    try{

        const trip=req.body;

        const result=await generateTrip(trip);

        res.json({
            success:true,
            itinerary:result
        });

    }
    catch(error){

        console.log(error);

        res.status(500).json({
            success:false,
            message:"AI Generation Failed",
            error:error.message
        });

    }

};


module.exports={
    generateItinerary
};