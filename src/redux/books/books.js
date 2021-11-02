import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [
  {
    id: uuidv4(),
    category: 'Programming',
    title: 'CRACKING the CODING INTERVIEW',
    author: 'by Gayle Laakmann McDowell',
    progress: {
      currentChapter: 'Chapter 17',
      completed: '64',
    },
  },
  {
    id: uuidv4(),
    category: 'Romantic Suspense',
    title: 'The Hunted One',
    author: 'by Brittney Sahin',
    progress: {
      currentChapter: 'Chapter 3: "A Lesson Learned"',
      completed: '8',
    },
  },
  {
    id: uuidv4(),
    category: 'Business Leadership Skills',
    title: 'Atomic Habits',
    author: 'by James Clear',
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
