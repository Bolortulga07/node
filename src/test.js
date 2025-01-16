import express from "express";
import fs from "fs";
import { route as bookRoutes } from "./modules/books/routes/booksRoutes.js";

const test = express();

test.use(express.json());

test.use("/books", bookRoutes);

test.get("/", (req, res) => {
  //html info page
  const html = fs.readFileSync("./index.html");

  res.setHeader("Content-type", "text/html");
  res.send(html);
});

test.post("/books", (req, res) => {
  const book = req.body;

  const books = JSON.parse(fs.readFileSync("./books.json"));

  books.push(book);

  fs.writeFileSync("./books.json", JSON.stringify(books));

  res.send({ success: true, message: "book added" });
});

export { test };
