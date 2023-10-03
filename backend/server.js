const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");

let temperatureData = {};

const app = express();
app.use(cors());
app.use(json());

app.post("/temperature", (req, res) => {
  temperatureData = req.body; 
  console.log("Received temperature data:", temperatureData);

  res.status(200).send("Temperature data received successfully");
});

app.get("/temperature", (req, res) => {
  console.log("Temperature data:", temperatureData);

  res.status(200).send(temperatureData);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
