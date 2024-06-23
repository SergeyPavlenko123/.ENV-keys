import "dotenv/config";

import express from "express";
const app = express();
import { omdbKey } from "./keys/apiKey.js";
const baseUrl = "http://www.omdbapi.com";

app.use(express.static("public"));

app.get("/test", async (req, res) => {
  const result = await fetch(`${baseUrl}/?apikey=${omdbKey}&s='batman'`);
  let data = await result.json();
  res.send(data);
  console.log(omdbKey);
});

app.get("/movies/get/:title", async (req, res) => {
  const result = await fetch(
    `${baseUrl}/?apikey=${omdbKey}&s=${req.params.title}`
  );
  let data = await result.json();
  res.send(data);
});

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});
