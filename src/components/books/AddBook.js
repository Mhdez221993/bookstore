import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../../redux/books/books';

const AddBooks = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setcategory] = useState('');

  const handleTitle = e => setTitle(e.target.value);
  const handleAuthor = e => setcategory(e.target.value);

  const submitBookToStore = e => {
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
    };

    dispatch(createBook(newBook));
    setTitle('');
    setcategory('');
    e.preventDefault();
  };

  return (
    <div className="submit-book">
      <form onSubmit={submitBookToStore}>
        <h3 className="input-book-label">ADD NEW BOOK</h3>
        <div className="wrapper-input">
          <input
            type="text"
            placeholder="Book title"
            name="title"
            className="book-title-input"
            value={title}
            required
            onChange={handleTitle}
          />
          <input
            type="text"
            placeholder="Category"
            name="author"
            className="book-author-input"
            value={category}
            onChange={handleAuthor}
          />
          <button
            className="book-submit"
            type="submit"
          >
            ADD BOOK
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBooks;
