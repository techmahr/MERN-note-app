import express from "express"
import { getAllNotes, createNote, updateNote, deleteNote } from "../controllers/notesController.js"

const router = express.Router();

router.get("/", getAllNotes);

router.post("/", createNote);

router.put("/:id", updateNote)

router.delete("/:id", deleteNote)

export default router

// This was the original code, but here we are removeing the "api/notes"
// creates and api route and defines  end point http://localhost:5001/api/notes
// app.get("/api/notes", (req, res) => {
//     res.status(200).send("You got 19 notes"); // send this as response 
// });

