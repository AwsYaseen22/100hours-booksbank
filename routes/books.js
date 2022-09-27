const express = require("express");
const router = express.Router();

const booksController = require("../controllers/books");
// protect routes with middle ware
const { ensureAuth, ensureGuest } = require("../middleware/auth");

const Book = require("../models/Book");
const { formatDate, truncate } = require("../helpers/ejs");

// show add new book
router.get("/add", ensureAuth, booksController.showAddBook);

// get book details from google book api with axios
router.post("/get-book-data", ensureAuth, booksController.bookDetails);

// show public books
router.get("/", booksController.publicBooks);

// show selected book details
router.get("/:id", booksController.bookDetails);

// show books read by specific user
router.get("/user/:id", booksController.userBooks);

// save new book to the db
router.post("/", ensureAuth, booksController.saveBook);

// show EDIT book page
router.get("/edit/:id", ensureAuth, booksController.showEditBook);

// edit the book on the db
router.put("/:id", ensureAuth, booksController.updateBook);

// delete a book from the db
router.delete("/:id", ensureAuth, booksController.deleteBook);

module.exports = router;
