import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBooks } from './booksReducer';
import AddBooks from './components/AddBook';
import DisplayBooks from './components/DisplayBooks';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector(books => books.booksReducer);

  useEffect(
    () => {
      dispatch(loadBooks());
    },
    [],
  );

  return (
    <div className="Books">
      <ul>
        { books.map(book => (
          <li key={book.item_id}>
            <DisplayBooks
              id={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
            />
            <br />
          </li>
        ))}
      </ul>
      <AddBooks />
    </div>
  );
};

export default Books;
