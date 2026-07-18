import axios from "./axios";


export const generateAITrip = (data)=>{
    return axios.post("/ai/generate", data);
};