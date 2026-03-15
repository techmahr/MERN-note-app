import mongoose, { mongo } from "mongoose";

// 1- create a schema 
// 2- model based off that schema 

// creating schema 
const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true // createdAt, updatedAt
    }
);

// creating model based on that schema 

const Note = mongoose.model("Note", noteSchema)

export default Note;