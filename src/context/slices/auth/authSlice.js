import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoged: false,

};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoged = true
    },
  },
});

export const { logIn } = authSlice.actions;
