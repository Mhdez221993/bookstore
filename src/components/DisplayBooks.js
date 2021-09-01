import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postBooks, getBooks } from '../redux/books/books';
import ProgresCircle from './ProgresCircle';

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
            <div className="book-progress">
              <ProgresCircle />
            </div>
            <div className="book-chapteer">
              <span className="chapter-items">Current Chapter</span>
              <span className="chapter-items">Chapter 17</span>
              <div className="chapter-items"><button className="update-progress" type="button">Update progres</button></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayBooks;
