import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../booksReducer';
import './DisplayBooks.css';
import ProgresCircle from './ProgresCircle';

const DisplayBooks = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="DisplayBooks">
      <div className="book-info">
        <span className="book-category">{ category }</span>
        <br />
        <span className="book-title">{ title }</span>
        <br />
        <span className="book-author">{ author }</span>
        <br />
        <div className="crud-operations">
          <button className="crud" type="button">Comments</button>
          <div className="Line-2" />
          <button
            className="crud"
            type="button"
            onClick={() => dispatch(deleteBook(id))}
          >
            Remove
          </button>
          <div className="Line-2" />
          <button className="crud" type="button">Edit</button>
        </div>
      </div>
      <ProgresCircle />
      <div className="book-chapteer">
        <span className="curren-chapter">CURRENT CHAPTER</span>
        <span className="chapter-number">Chapter 17</span>
        <button className="update-progress" type="button">Update progres</button>
      </div>
    </div>
  );
};

DisplayBooks.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default DisplayBooks;
