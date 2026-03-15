import express from "express";

const app = express(); // initalizes and experss application instance 

// creates and api route and defines  end point http://localhost:5001/api/notes
app.get("/api/notes", (req, res) => {
    res.status(200).send("You got 19 notes"); // send this as response 
});

app.post("/api/notes", (req, res) => {
    res.status(201).json({ message: "Noted created successfully" });
})

app.put("/api/notes:id", (req, res) => {
    res.status(200).json({ message: "Note updated successfully!" })
})

app.delete("/api/notes:id", (req, res) => {
    res.status(200).json({ message: "Note deleted successfully!" })
})

// start the server 

app.listen(5001, () => {
    console.log("Server running on port 5001");
});