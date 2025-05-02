import express from "express";
const app = express();

const port = 5000;

app.get("/", () => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`server is connected http://localhost:${port}`);
});
