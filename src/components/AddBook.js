import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../redux/books/books';

function AddBooks() {
  const dispatch = useDispatch();
  const [title, setTile] = useState('');
  const [category, setCategory] = useState('');

  const handleTitle = e => setTile(e.target.value);
  const handleCategory = e => setCategory(e.target.value);

  const handleSubmit = e => {
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
    };

    dispatch(createBook(newBook));
    setTile('');
    setCategory('');
    e.preventDefault();
  };

  return (
    <div className="submit-book">
      <form onSubmit={handleSubmit}>
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
            name="category"
            className="book-category-input"
            value={category}
            onChange={handleCategory}
          />
          <button className="book-submit" type="submit">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
}

export default AddBooks;
