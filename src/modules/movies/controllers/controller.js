import fs from "fs";
import { readJSONFile } from "../../../utils/utils.js";

const movieList = (req, res) => {
  let movies = readJSONFile("movies");

  const { limit, search } = req.query;

  if (search) {
    movies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search)
    );
  }

  if (limit) {
    movies = movies.slice(0, Number(limit));
  }
  res.send(movies);
};

const movieDetail = (req, res) => {
  const movies = readJSONFile("movies");
  const { id } = req.params;

  const movie = movies.find((movie) => movie.id === parseInt(id));

  res.send(movies);
};

const postedMovie = (req, res) => {
  const movie = req.body;

  const movies = JSON.parse(fs.readFileSync("./movies.json"));

  movies.push(movie);

  fs.writeFileSync("./movies.json", JSON.stringify(movies));

  res.send({ success: true, message: "movie added" });
};

const updatedMovie = (req, res) => {
  const { id } = req.params;
  const movie = req.body;

  const movies = JSON.parse(fs.readFileSync("./movies.json"));

  const index = movies.findIndex((i) => i.id === Number(id));

  movies[index] = movie;

  fs.writeFileSync("./movies.json", JSON.stringify(movies));

  res.send({ success: true, message: "Movie updated" });
};

const fixedMovie = (req, res) => {
  const { id } = req.params;
  const movie = req.body;

  const movies = JSON.parse(fs.readFileSync("./movies.json"));

  const index = movies.findIndex((i) => i.id === Number(id));

  movies[index] = { ...movies[index], ...movie };

  fs.writeFileSync("./movies.json", JSON.stringify(movies, null, 2));

  res.send({ success: true, message: "Movie updated" });
};

const deletedMovie = (req, res) => {
  const { id } = req.params;

  const movies = JSON.parse(fs.readFileSync("./movies.json"));

  const index = movies.findIndex((i) => i.id === Number(id));

  const deletedOne = movies[index];

  movies.splice(index, 1);

  fs.writeFileSync("./movies.json", JSON.stringify(movies, null, 2));

  res.send({ success: true, message: "Movie deleted", deleted: deletedOne });
};

export {
  movieList,
  movieDetail,
  updatedMovie,
  fixedMovie,
  deletedMovie,
  postedMovie,
};
