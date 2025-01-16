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
  res.send(movies.toString());
};

const movieDetail = (req, res) => {
  const movies = readJSONFile("movies");
  const { id } = req.params;

  const movie = movies.find((movie) => movie.id === parseInt(id));

  res.send(movies.toString());
};

export { movieList, movieDetail };
