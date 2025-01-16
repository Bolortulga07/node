import express from "express";

import {
  movieList,
  movieDetail,
  postedMovie,
  updatedMovie,
  fixedMovie,
  deletedMovie,
} from "../controllers/controller.js";

const route = express.Router();

route.get("/", movieList);

route.get("/:id", movieDetail);

route.post("./id", postedMovie);

route.put("/:id", updatedMovie);

route.patch("/:id", fixedMovie);

route.delete("/:id", deletedMovie);

export { route };
