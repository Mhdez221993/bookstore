import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, loadBooks } from '../redux/books/books';
import ProgresCircle from './ProgresCircle';

function DisplayBooks() {
  const dispatch = useDispatch();
  const books = useSelector(book => book.booksReducer);
  const handleDeleteBook = id => dispatch(deleteBook(id));

  useEffect(
    () => {
      dispatch(loadBooks());
    },
    [],
  );

  return (
    <div className="DisplayBooks">
      <ul>
        {books.map(book => (
          <li key={book.item_id} className="book-list-item">
            <div className="book-info">
              <span className="book-category">{ book.category }</span>
              <span className="book-title">{ book.title }</span>
              <span className="book-author">Book author</span>
              <div className="crud-operations">
                <button className="crud" type="button">Comments</button>
                <button className="crud" type="button" onClick={() => handleDeleteBook(book.item_id)}>Remove</button>
                <button className="crud" type="button">Edit</button>
              </div>
            </div>
            <div className="book-progress">
              <ProgresCircle />
            </div>
            <div className="book-chapteer">
              <span className="chapter-items first">Current Chapter</span>
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
