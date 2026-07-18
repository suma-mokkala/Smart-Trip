const express=require("express");
const router=express.Router();

const {generateItinerary}=require("../controllers/aiController");


router.post("/generate",generateItinerary);


module.exports=router;