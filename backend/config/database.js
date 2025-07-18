import mongoose from "mongoose";


export const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.DATABASE_URL, {dbName:process.env.DATABASE_NAME});
        console.log(`MongoDB connected: ${conn.connection.host}`);

    }catch(error){
        console.log(`Error: ${error.message}`);
        process.exit(1); //process exit code: 1 means failure, 0 means success
    }
}