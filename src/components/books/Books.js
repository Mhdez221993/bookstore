import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddBooks from './AddBook';
import DisplayBooks from './DisplayBooks';

const books = [
  {
    id: uuidv4(),
    title: 'Book title 1',
    category: 'sfy',
  },
  {
    id: uuidv4(),
    title: 'Book title 2',
    category: 'sfy',
  },
];

const Books = () => (
  <div className="Books">
    <ul>
      { books.map(({ id, title, category }) => (
        <li key={id}>
          <DisplayBooks title={title} category={category} />
        </li>
      ))}
    </ul>
    <AddBooks />
  </div>
);

export default Books;
