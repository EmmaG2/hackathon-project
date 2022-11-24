import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: {
        value: '',
        isUsable: true
    },
    direccion: {
        value: '',
        isUsable: true
    },
    age: {
        value: 18,
        isOlderAge: true,
        isUsable: true
    },

};

export const userDataSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    reducerName: (state, action) => {
      
    },
  },
});

export const { reducerName } = userDataSlice.actions;

export default userDataSlice.reducer;