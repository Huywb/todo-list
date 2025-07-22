import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        console.log(process.env.MONGODB_URI);
        const mongoUri = process.env.MONGODB_URI || "mongodb+srv://admin:admin123@cluster0.sbxyvvu.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0";
        const connect = await mongoose.connect(mongoUri);
        if(connect){
            console.log("Connected DB")
        }
    } catch (error) {
        console.error("Database connection error:", error);
    }
  return null;
}

export default ConnectDB;
