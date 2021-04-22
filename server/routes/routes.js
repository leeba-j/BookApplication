const express = require('express');
const router = express.Router();
const booksController = require("../controller/booksController");

//Add a new book
router.post("/books",booksController.createBook);

//Retrieve all books
router.get('/allBooks', booksController.retrieveBooks)


module.exports = router;