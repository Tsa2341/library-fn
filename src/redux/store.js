import { configureStore } from '@reduxjs/toolkit';
import memberReducer from './slices/member.slice';

export default configureStore({
  reducer: { member: memberReducer },
});
