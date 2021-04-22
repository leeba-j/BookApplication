const express = require('express');
const router = express.Router();
const booksController = require("../controller/booksController");

router.post("/books",booksController.createBook);


module.exports = router;