import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { removeBook } from '../redux/books/books';

function DisplayBooks() {
  const dispatch = useDispatch();
  const books = useSelector(book => book.booksReducer);

  return (
    <div className="DisplayBooks">
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <span>
              {' '}
              { book.title }
              {' '}
            </span>
            <span>
              {' '}
              { book.author }
              {' '}
            </span>
            <button type="button" onClick={() => dispatch(removeBook(book.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayBooks;
