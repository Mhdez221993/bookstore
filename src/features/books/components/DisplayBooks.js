import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../booksReducer';
import ProgresCircle from './ProgresCircle';

const DisplayBooks = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="book-info">
        <span className="book-category">{ category }</span>
        <br />
        <span className="book-title">{ title }</span>
        <br />
        <span className="book-category">{ author }</span>
        <br />
        <div className="crud-operations">
          <button className="crud" type="button">Comments</button>
          <button
            className="crud"
            type="button"
            onClick={() => dispatch(deleteBook(id))}
          >
            Remove
          </button>
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
    </>
  );
};

DisplayBooks.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default DisplayBooks;