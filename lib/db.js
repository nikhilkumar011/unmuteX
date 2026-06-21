import mongoose from 'mongoose'

export async function connectDb(){
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error("MONGODB_URI environment variable is missing. Please check your .env.local file.");
        }
        await mongoose.connect(uri)
        console.log('DB Connected...')
    } catch (error) {
        console.log("Database connection error:", error.message)
    }
}