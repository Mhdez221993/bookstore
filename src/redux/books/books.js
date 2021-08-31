import FetchApi from '../API/api';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const initialState = [];
const fetchApi = new FetchApi();

export const addBook = payload => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = id => ({
  type: REMOVE_BOOK,
  id,
});

export const getBooks = () => async dispatch => {
  const apiBooks = await fetchApi.get();
  Object.entries(apiBooks).forEach(([id, [{ category, title }]]) => {
    dispatch(addBook({ category, title, id }));
  });
};

export const postBooks = (payload, method) => async dispatch => {
  if (method === 'POST') {
    dispatch(addBook(payload));
  } else {
    dispatch(removeBook(payload));
  }
  await fetchApi.post(payload, method);
};

// export const deleteBooks = id => async dispatch => {
//   dispatch(removeBook(id));
//   await fetchApi.deleteBook(id);
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
