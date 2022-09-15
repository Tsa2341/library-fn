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
    getMember: (state, { data }) => {
      return { ...state, member: data, loadingGet: false };
    },
    loadingGet: (state, _) => {
      return { ...state, loadingGet: true };
    },
    error: (state, { error }) => {
      return { ...state, loadingGet: false, error };
    },
  },
});

export const {
  loadingGet: loadingGetAction,
  getMember: getMemberAction,
  error: memberError,
} = memberSlice.actions;

export default memberSlice.reducer;
