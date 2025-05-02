import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import eventRouter from "./routes/eventRoute.js";

const app = express();

dotenv.config();

const port = process.env.PORT || 8000;

const mongoUri = process.env.MONGO_URI;

app.use(express.json());

app.get("/", () => {
  res.send("hello world");
});

app.use("/api/events", eventRouter);

mongoose.connect(mongoUri).then(() => {
  console.log(`server is connected to database`);
  app.listen(port, () => {
    console.log(`server is connected http://localhost:${port}`);
  });
});
