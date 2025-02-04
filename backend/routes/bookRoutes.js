const express = require('express');
const { getBooks, createBook, deleteBook } = require('../controllers/bookController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(protect, getBooks).post(protect, createBook);
router.route('/:id').delete(protect, deleteBook);

module.exports = router;