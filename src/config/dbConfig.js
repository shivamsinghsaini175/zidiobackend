import mongoose from "mongoose";


export const connectDB = async function () {
    try {
        await mongoose.connect("");
        console.log(`connected to mongoDb database${mongoose.connection.host}`)
    } catch (error) {
        console.log(error,'Soemthing went wrong');
    }
};