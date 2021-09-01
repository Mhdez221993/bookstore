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
    e.target.author.value = '';
  };

  return (
    <div className="Books">
      <form onSubmit={submitBookToStore}>
        <input
          type="text"
          placeholder="Add Book"
          name="title"
        />
        <input
          type="text"
          placeholder="Add Author"
          name="author"
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBooks;
