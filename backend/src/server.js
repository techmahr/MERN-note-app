import express from "express";
import noteRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();


const app = express(); // initalizes and experss application instance 
const PORT = process.env.PORT || 5001;

connectDB();

// Midleware 

app.use(express.json());

app.use("/api/notes", noteRoutes); // creates and api route and defines  end point http://localhost:5001/api/notes

// start the server 

app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
});