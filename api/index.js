import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser";

import cors from "cors"

const app = express()
dotenv.config()
mongoose.set('strictQuery', false);

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'https://booking-frontend-zeta.vercel.app');
//     res.header('Access-Control-Allow-Methods', 'POST, GET');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     next();
// });

// app.use(cors(
//     {
//         origin:["*"],
//         methods: ["POST","GET"],
//         credentials:true
//     }
// ));

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB!🎉");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });

app.use(cookieParser())
app.use(express.json())

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);


app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "something went wrong"
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    })
})

app.listen(8800,()=>{
    connect()
    console.log("connected to backend!🎉")
})

