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
          <li key={book.id}>
            <span>
              {' '}
              { book.title }
              {' '}
            </span>
            <span>
              {' '}
              { book.category }
              {' '}
            </span>
            <button type="button" onClick={() => dispatch(postBooks(book.id, 'DELETE'))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayBooks;
