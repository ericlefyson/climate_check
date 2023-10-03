import express from "express";
import { json } from "body-parser";

let temperatureData = {};

const app = express();
app.use(json());

app.post("/temperature", (req, res) => {
  temperatureData = req.body; // Os dados da temperatura são enviados no corpo da solicitação POST
  console.log("Received temperature data:", temperatureData);
  // Você pode salvar os dados em um banco de dados ou realizar outras ações aqui
  res.status(200).send("Temperature data received successfully");
});

app.get("/temperature", (req, res) => {
  console.log("Temperature data:", temperatureData);
  // Você pode salvar os dados em um banco de dados ou realizar outras ações aqui
  res.status(200).send(temperatureData);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
