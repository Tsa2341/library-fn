import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  member: {},
  loadingGet: false,
  error: null,
};

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    getMember: (state, { payload }) => {
      return { ...state, member: payload, loadingGet: false };
    },
    loadingGet: (state, _) => {
      return { ...state, loadingGet: true };
    },
    error: (state, { payload }) => {
      return { ...state, loadingGet: false, error: payload };
    },
  },
});

export const {
  loadingGet: loadingGetAction,
  getMember: getMemberAction,
  error: memberError,
} = memberSlice.actions;

export default memberSlice.reducer;
