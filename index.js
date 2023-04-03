import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"

const app = express()
dotenv.config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDB");
  } catch (error) {
    console.log("err on mongo", error);
  }
};

// mongoose.connection.on("conneted", () => {
//     console.log("mongoDB connected")
// })

// mongoose.connection.on("disconneted", () => {
//     console.log("mongoDB disconnected")
// })

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello there!");
// });
app.use("/", (req, res, next) => {
  //   return res.send({ mothod: req.method, url: req.url, body: req.body });
  console.log("middleware called:");
  next();
});

// we have used middleware here
// app.use("/api/auth", authRoute); 
app.use("/api/hotels", hotelsRoute); 
// app.use("/api/rooms", roomsRoute); 
// app.use("/api/users", usersRoute); 

app.listen(process.env.PORT, () => {
    connect()
    console.log("connected to backend.")
});