const booksModel = require("../model/bookModel");

exports.createBook = (req, res) => {
  booksModel
    .create({
      title: "Title",
      author: "Author",
      description: "Description",
      image: "image",
    })
    .then((data) => res.send(data))
    .catch((error) => res.send(error));
};
