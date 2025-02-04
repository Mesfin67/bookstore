const asyncHandler = require('express-async-handler');
const Book = require('../models/Book');

// books for the user
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({ user: req.user._id });
  res.json(books);
});

//    creating a new book
const createBook = asyncHandler(async (req, res) => {
  const { title, author } = req.body;
  const book = await Book.create({ title, author, user: req.user._id });
  res.status(201).json(book);
});

//    delete a book
const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (book.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized to delete this book');
  }
  await book.remove();
  res.json({ message: 'Book removed' });
});

module.exports = { getBooks, createBook, deleteBook };