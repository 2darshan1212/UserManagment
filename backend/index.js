import express from "express";
import {} from "dotenv/config";
import cors from "cors";
import { connectDB } from "./config/db.js";
import router from "./routes/user.js";

const app = express();
//database connection
connectDB();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.static("public"));

//routes
app.use("/api/v1", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
