import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';
import './Home.css';


const Home = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await API.get('/books');
        setBooks(data);
      } catch (error) {
        alert('Failed to fetch books');
      }
    };
    fetchBooks();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
  };

  return (
    <div className="home container">
      <h1 className='header'>Welcome to the Bookstore</h1> <br />
      <div className='bookform'>
        <BookForm setBooks={setBooks} />
      </div> <br />
      <BookList books={books} setBooks={setBooks} />
      <button className='button' onClick={handleLogout}>Logout</button>   

    </div>
  );
};

export default Home;