import mongoose from "mongoose";

let isConnected = false; 


export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
    if (isConnected) {
    console.log("Already connected to the database");
    return;
  }
  try {
    await mongoose.connect('mongodb+srv://dmadhusudhan98:NDnVSev8FBeRXgeC@cluster0.z70qzwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
        dbName: "share_prompt",
        useNewUrlParser : true,
        useUnifiedTopology : true,
    });
    isConnected = true;
    console.log("Connected to the database");
  } catch (error) {
    console.log("Error connecting to the database", error);
  }
};