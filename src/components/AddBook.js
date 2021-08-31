import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function AddBooks() {
  const dispatch = useDispatch();

  const submitBookToStore = e => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: e.target.title.value,
      author: e.target.author.value,
    };

    dispatch(addBook(newBook));
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
