import React from 'react';
import API from '../api';

const BookList = ({ books, setBooks }) => {
  const handleDelete = async (id) => {
    try {
      await API.delete(`/books/${id}`);
      setBooks(books.filter((book) => book._id !== id));
    } catch (error) {
      alert('Failed to delete book');
    }
  };

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book._id} className="book-item">
          <h3>{book.title}</h3>
          <p>By {book.author}</p>
          <button onClick={() => handleDelete(book._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;