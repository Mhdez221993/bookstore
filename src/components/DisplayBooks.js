import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postBooks, getBooks } from '../redux/books/books';

function DisplayBooks() {
  const dispatch = useDispatch();
  const books = useSelector(book => book.booksReducer);

  useEffect(
    () => {
      dispatch(getBooks());
    },
    [],
  );

  return (
    <div className="DisplayBooks">
      <ul>
        {books.map(book => (
          <li key={book.id} className="book-list-item">
            <div className="book-info">
              <span className="book-category">{ book.category }</span>
              <span className="book-title">{ book.title }</span>
              <span className="book-category">Book author</span>
              <div className="crud-operations">
                <button className="crud" type="button">Comments</button>
                <button className="crud" type="button" onClick={() => dispatch(postBooks(book.id, 'DELETE'))}>Remove</button>
                <button className="crud" type="button">Edit</button>
              </div>
            </div>
            <div className="book-progress">Performance</div>
            <div className="book-chapteer">chapteer</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayBooks;
