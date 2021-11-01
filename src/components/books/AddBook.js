import React from 'react';

function AddBooks() {
  return (
    <div className="submit-book">
      <form>
        <h3 className="input-book-label">ADD NEW BOOK</h3>
        <div className="wrapper-input">
          <input
            type="text"
            placeholder="Book title"
            name="title"
            className="book-title-input"
            value="title"
            required
          />
          <input
            type="text"
            placeholder="Category"
            name="category"
            className="book-category-input"
            value="category"
          />
          <button className="book-submit" type="submit">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
}

export default AddBooks;
