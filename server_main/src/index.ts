import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import userRoutes from "./routes/userRoutes";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to MongoDB"));

const app = express();
app.use(cors());

app.use(express.static("public"));
app.use(express.json());

app.get("/health", async (req: Request, res: Response) => {
    res.send({ message: "Health ok!" });
  });
  
app.use("/api/my/user", userRoutes);


app.listen(7000, () => {
    console.log("Server is running on port 7000");
  });