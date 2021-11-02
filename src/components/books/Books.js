import React from 'react';
import { useSelector } from 'react-redux';
import AddBooks from './AddBook';
import DisplayBooks from './DisplayBooks';

const Books = () => {
  const books = useSelector(books => books.booksReducer);
  return (
    <div className="Books">
      <ul>
        { books.map(({
          id, title, author, category,
        }) => (
          <li key={id}>
            <DisplayBooks title={title} author={author} category={category} />
            <br />
          </li>
        ))}
      </ul>
      <AddBooks />
    </div>
  );
};

export default Books;
