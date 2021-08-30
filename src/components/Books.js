import React from 'react';
import AddBooks from './AddBook';
import DisplayBooks from './DisplayBooks';

function Books() {
  return (
    <div className="Books">
      <DisplayBooks />
      <AddBooks />
    </div>
  );
}

export default Books;
