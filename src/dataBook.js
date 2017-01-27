import { getAll as fetchBooks, getOne as fetchBook } from './fetchBook';

const initState = {
  bookList: [],
  currentBook: null,
  loader: false
};

export default function dataBook(state = initState, action) {
  switch (action.type) {
    case 'LOAD_START':
      return {
        ...state,
        loader: true
      };
    case 'GET_BOOK_SUCCESS':
      return {
        ...state,
        currentBook: action.book,
        loader: false
      };
    case 'GET_BOOKS_SUCCESS':
      return {
        ...state,
        bookList: action.records,
        loader: false
      };
  default:
    return state
  }
}

export function getBooks() {
  return dispatch => {
    dispatch({ type: 'LOAD_START' });

    fetchBooks(0)
      .then(json => {
        console.log(json);
        dispatch({ type: 'GET_BOOKS_SUCCESS', records: json.records })
      });
  }
}

export function getBook(id) {
  return (dispatch, getState) => {
    dispatch({ type: 'LOAD_START' })

    const bookList = getState().bookList;
    const book = bookList.find(book => book.recordid === id);
    if (book) {
      return dispatch({ type: 'GET_BOOK_SUCCESS', book });
    }
    fetchBook(id)
      .then(json => {
        console.log(id);
        dispatch({ type: 'GET_BOOK_SUCCESS', book: json.records[0] })
      });
  }
}
