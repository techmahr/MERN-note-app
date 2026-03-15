import express from "express";
import noteRoutes from "./routes/notesRoutes.js";

const app = express(); // initalizes and experss application instance 

app.use("/api/notes", noteRoutes); // creates and api route and defines  end point http://localhost:5001/api/notes

// start the server 

app.listen(5001, () => {
    console.log("Server running on port 5001");
});