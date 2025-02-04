import React, { useState } from 'react';
import API from '../api';

const BookForm = ({ setBooks }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/books', { title, author });
      setBooks((prevBooks) => [...prevBooks, data]);
      setTitle('');
      setAuthor('');
    } catch (error) {
      alert('Failed to create book');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /> <br />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      /> <br />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;