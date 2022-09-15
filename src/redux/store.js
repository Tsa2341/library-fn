import { configureStore } from '@reduxjs/toolkit';
import memberReducer from './slices/member.slice';
import allBooksReducer from './slices/allBooks.slice';
import oneBookReducer from './slices/oneBook.slice';

export default configureStore({
  reducer: {
    member: memberReducer,
    allBooks: allBooksReducer,
    oneBook: oneBookReducer,
  },
});
