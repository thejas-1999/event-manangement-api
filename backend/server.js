import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();

dotenv.config();

const port = process.env.PORT || 8000;

const mongoUri = process.env.MONGO_URI;

app.get("/", () => {
  res.send("hello world");
});

mongoose.connect(mongoUri).then(() => {
  console.log(`server is connected to database`);
  app.listen(port, () => {
    console.log(`server is connected http://localhost:${port}`);
  });
});
