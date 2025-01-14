import fs from "fs";
import { readJSONFile } from "../../../utils/utils.js";

const movieList = (req, res) => {
  const movies = readJSONFile("movies");

  res.send({ success: true, data: movies });
};

const movieDetail = (req, res) => {
  const movies = readJSONFile("movies");

  res.send({ success: true, data: movies });
};

export { movieList, movieDetail };
