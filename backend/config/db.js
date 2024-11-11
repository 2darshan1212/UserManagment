import mongoose from "mongoose";
import {} from "dotenv/config";

export const connectDB = () => {
  mongoose.connect(process.env.URL).then(() => {
    console.log("DB connected");
  });
};
