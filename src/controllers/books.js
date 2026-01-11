const Book = require("../models/book");

const getBooks = (request, response) => {
  //Get all books
  return Book.find({}).then((data) => {
    response.status(200).send(data);
  }).catch(e => response.status(500).send(e.message));
};

const getBook = (request, response) => {
  //Get Books
  const { book_id } = request.params;
  return Book.findById(book_id).then((book) => {
    response.status(200).send(book);
  }).catch(e => response.status(500).send(e.message));
};

const createBook = (request, response) => {
  //Create new Book
  return Book.create({ ...request.body }).then((book) => {
    response.status(201).send(book);
  }).catch(e => response.status(500).send(e.message));
};

const updateBook = (request, response) => {
  //Update Book
  const { book_id } = request.params;
  return Book.findByIdAndUpdate(book_id, { ...request.body }).then((book) => {
    response.status(200).send(book);
  }).catch(e => response.status(500).send(e.message));
};

const deleteBook = (request, response) => {
  //Delete Book
  const { book_id } = request.params;
  return Book.findByIdAndDelete(book_id).then((book) => {
    response.status(200).send("Success");
  }).catch(e => response.status(500).send(e.message));
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
