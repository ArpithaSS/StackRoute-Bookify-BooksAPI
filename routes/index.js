const express = require("express");
const router = express.Router();
const {
  GetBooks,
  GetBook,
  AddBook,
  UpdateBook,
  DeleteBook,
} = require("../controllers/BookController");

router.get("/books", GetBooks);
router.get("/books/:isbn", GetBook);
router.post("/books", AddBook);
router.put("/books/:isbn", UpdateBook);
router.delete("/books/:isbn", DeleteBook);

module.exports = router;
