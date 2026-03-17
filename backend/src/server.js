import express from "express";
import cors from "cors"
import dotenv from "dotenv";

import noteRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import ratelimiter from "./middleware/rateLimiter.js";


dotenv.config();


const app = express(); // initalizes and experss application instance 
const PORT = process.env.PORT || 5001;



// Midleware to convert json to js. it parse json bodies: req.body

app.use(express.json());

app.use(ratelimiter) // middleware for limiting request to the application 

app.use(cors({ // for cross browser data transfer issue fix 
    origin: "http://localhost:5173" // cors will allow darta from any url, here we are restricting our api url 
}));

app.use("/api/notes", noteRoutes); // creates and api route and defines  end point http://localhost:5001/api/notes

connectDB().then(() => { // connection to the DB
    // start the server 
    app.listen(PORT, () => {
        console.log("Server running on port: ", PORT);
    });
})



