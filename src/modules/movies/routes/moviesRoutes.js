import express from "express";
import fs from "fs";

const route = express.Router();

route.get("/movies", (req, res) => {
  const movies = JSON.parse(fs.readFileSync("./movies.json"));

  const { movieTitle } = req.query;
  console.log(movieTitle);

  let result;

  if (movieTitle) {
    result = movies.filter((movie) =>
      movie.title.toLowerCase().includes(movieTitle.toLowerCase())
    );
  } else {
    result = movies;
  }
  res.json(result);
});

export { route };
