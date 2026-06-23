import dotenv from 'dotenv';
dotenv.config();
import express from 'express';



import  AuthRouter from "./src/routers/auth.route.js";
import  PublicRouter from "./src/routers/public.route.js";
import connectDB from "./src/config/dbConnection.config.js";

const app = express();

// // MongoDB Connect
// connectDB();

app.use(express.json()); // middleware (index--> router)

app.use("/auth" , AuthRouter);
app.use("/public" , PublicRouter);

app.get("/",(req,res)=>{
    console.log("Default GET API Hit");
    res.json({message: "Welcome to my first backend project "});
});


const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("Server started on port :",port);
    connectDB();
});