import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongo db is connected");
  } catch (error) {
    console.log("Error connecting to database");
    console.log(error);
  }
};

export default dbConnect;


