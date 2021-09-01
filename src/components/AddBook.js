import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBooks } from '../redux/books/books';

function AddBooks() {
  const dispatch = useDispatch();

  const submitBookToStore = e => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: e.target.title.value,
      category: e.target.author.value,
    };

    dispatch(postBooks(newBook, 'POST'));
    e.target.title.value = '';
    e.target.category.value = '';
  };

  return (
    <div className="submit-book">
      <form onSubmit={submitBookToStore}>
        <h3>ADD NEW BOOK</h3>
        <div className="wrapper-input">
          <input
            type="text"
            placeholder="Book title"
            name="title"
            className="book-title"
          />
          <input
            type="text"
            placeholder="Category"
            name="category"
            className="book-category"
          />
          <button className="book-submit" type="submit">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
}

export default AddBooks;
