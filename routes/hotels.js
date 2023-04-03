import express from "express";
import Hotel from "../models/Hotel.js"

const router = express.Router();

//CREATE

router.post("/", async(req,res)=>{
    console.log(req.body)
    console.log("hello")
    const payload = {}
    const newHotel = await Hotel.create({});
    try{
        console.log(newHotel)
        res.status(200).json(newHotel);
        console.log(newHotel)
    }
    catch(err){
        res.status(500).json(err);
    }
})

//UPDATE
//DELETE

export default router

