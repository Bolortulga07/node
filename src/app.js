import express from "express";
import fs from "fs";
import { route } from "./modules/movies/routes/moviesRoutes.js";

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  const html = fs.readFileSync("./index.html");

  res.setHeader("Content-type", "text/html");

  res.send(html);
});

app.get("/movies", (req, res) => {
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

app.post("/movies", (req, res) => {
  const movie = req.body;
  console.log(movie);
  const movies = JSON.parse(fs.readFileSync("./movies.json"));

  movies.push(movie);

  fs.writeFileSync("./movies.json", JSON.stringify(movies));

  res.send({ success: true, message: "movie added" });
});

export { app };
