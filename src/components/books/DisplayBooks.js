import PropTypes from 'prop-types';
import React from 'react';
import ProgresCircle from './ProgresCircle';

const DisplayBooks = ({ title, category }) => (

  <>
    <div className="book-info">
      <span className="book-category">{ category }</span>
      <span className="book-title">{ title }</span>
      <span className="book-author">Book author</span>
      <div className="crud-operations">
        <button className="crud" type="button">Comments</button>
        <button className="crud" type="button">Remove</button>
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

DisplayBooks.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default DisplayBooks;
