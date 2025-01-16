import fs from "fs";
import { readJSONFile } from "../../../utils/utils.js";

const bookList = (req, res) => {
  let books = readJSONFile("books");

  const { limit, search } = req.query;

  if (search) {
    books = books.filter((book) => book.title.toLowerCase().includes(search));
  }

  if (limit) {
    books = books.slice(0, Number(limit));
  }
  res.send(books);
};

const bookDetail = (req, res) => {
  const books = readJSONFile("books");
  const { id } = req.params;

  const book = books.find((book) => book.id === parseInt(id));

  res.send(book);
};

export { bookList, bookDetail };
