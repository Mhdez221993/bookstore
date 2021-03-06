import * as API from '../../app/client';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [
  {
    item_id: 'mock-1',
    category: 'Programming',
    title: 'CRACKING the CODING INTERVIEW',
    author: 'by Gayle Laakmann McDowell',
    progress: {
      currentChapter: 'Chapter 17',
      completed: '64',
    },
  },
  {
    item_id: 'mock-3',
    category: 'Business Leadership Skills',
    title: 'Atomic Habits',
    author: 'by James Clear',
    progress: {
      currentChapter: 'Introduction',
      completed: '0',
    },
  },
];

API.createApp();

const addBook = payload => ({
  type: ADD_BOOK,
  payload,
});

const removeBook = id => ({
  type: REMOVE_BOOK,
  id,
});

export const createBook = book => async dispatch => {
  const isCreated = await API.createBook(book);
  if (isCreated) {
    dispatch(addBook(book));
  }
};

export const deleteBook = id => async dispatch => {
  if (id.startsWith('mock-')) {
    dispatch(removeBook(id));
  } else {
    const isDeleted = await API.deleteBook(id);

    if (isDeleted) {
      dispatch(removeBook(id));
    }
  }
};

export const loadBooks = () => async dispatch => {
  const books = await API.getBooks();

  if (books) {
    Object.entries(books).forEach(([key, value]) => {
      const [book] = value;
      const newBook = {
        item_id: key,
        ...book,
        author: 'Author not set',
        progress: {
          currentChapter: 'Introduction',
          completed: '0',
        },
      };
      dispatch(addBook(newBook));
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        ...action.payload,
        author: 'Author not set',
        progress: {
          currentChapter: 'Introduction',
          completed: '0',
        },
      }];
    case REMOVE_BOOK:
      return state.filter(book => book.item_id !== action.id);

    default:
      return state;
  }
};

export default reducer;
