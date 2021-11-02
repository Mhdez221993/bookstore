import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [
  {
    id: uuidv4(),
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    progress: {
      currentChapter: 'Chapter 17',
      completed: '64',
    },
  },
  {
    id: uuidv4(),
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    progress: {
      currentChapter: 'Chapter 3: "A Lesson Learned"',
      completed: '8',
    },
  },
  {
    id: uuidv4(),
    category: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    progress: {
      currentChapter: 'Introduction',
      completed: '0',
    },
  },
];

export const addBook = payload => ({
  type: ADD_BOOK,
  payload,
});
export const removeBook = payload => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.payload);

    default:
      return state;
  }
};

export default reducer;
