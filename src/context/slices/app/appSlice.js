import {createSlice} from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: [],
  reducers: {
    createField: (state, {payload}) => {
      const newField = {
        id: new Date(),
        type: payload.type,
      }

      state.push(newField)
    },
    deleteField: (state, {payload}) => {
      return state.filter((item) => item.id !== payload.id)
    },
  },
})

export const {createField, deleteField} = appSlice.actions
