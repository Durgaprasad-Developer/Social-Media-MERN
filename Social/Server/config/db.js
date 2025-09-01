import mongoose from "mongoose";




const connectDB = async () => {
    try{
        await mongoose.connect(process.env.dbUrl);
        console.log("MongoDB connected");
    }catch(err){
        console.log("Error"+ err)
        process.exit(1);
    }
}


export default connectDB