import express from "express";
import Hotel from "../models/Hotel.js"

const router = express.Router();

//CREATE

router.post("/", async(req,res)=>{
  console.log("body:", req.body);
  const {
    name,
    type,
    city,
    address,
    distance,
    photos,
    title,
    description,
    rating,
    cheapestPrice,
  } = req.body;

  const payload = {
    name,
    type,
    city,
    address,
    distance,
    photos,
    title,
    description,
    rating,
    cheapestPrice,
  };
  try {
    const newHotel = await Hotel.create(payload);
    console.log(newHotel);
    return res.status(200).json(newHotel);
  } catch (err) {
    return res.status(500).json(err);
  }
})

router.get("/", async (req, res) => {
  try {
    const hotels = await Hotel.find({});
    return res.send(hotels);
  } catch (err) {
    console.log(err);
    return res.send({ msg: "Something went wrong" });
  }
});

//UPDATE
//DELETE

export default router

