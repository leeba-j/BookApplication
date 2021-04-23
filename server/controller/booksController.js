const booksModel = require("../model/bookModel");

//Function to add a new book
exports.createBook = (req, res) => {
  const { title, author, description, image } = req.body;
  booksModel
    .create({
      title: title,
      author: author,
      description: description,
      image: image,
    })
    .then((data) => res.json(data))
    .catch((error) => res.json("Error: ", error));
};

//Function to retrieve all books
exports.retrieveBooks = (req, res) => {
  booksModel
    .find({})
    .then((data) => res.json(data))
    .catch((error) => res.status(200).json("Error: ", error));
};

//Function that deletes a book according to its id
exports.deleteBook = (req, res) => {
  const { id } = req.params;
  booksModel
    .findByIdAndDelete({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json("Error: ", error));
};

//Function that edits a book
exports.editBook = (req, res) => {
  const { title, author, description, image } = req.body;
  const { id } = req.params;
  booksModel
    .findByIdAndUpdate(
      { _id: id },
      { title: title, author: author, description: description, image: image }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json("Error: ", error));
};
