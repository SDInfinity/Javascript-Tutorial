import express from "express";

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello.");
});

app.listen(3000, () => {
  console.log("Server started running on port 3000.");
});
