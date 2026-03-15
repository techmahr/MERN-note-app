import mongoose from "mongoose"


export const connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");

    } catch (error) {
        console.log("Eroor connecting DB", error);
        process.exit(1) // means exit with failure 
    }
};
