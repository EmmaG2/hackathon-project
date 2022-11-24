import {createSlice} from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: [],
  reducers: {
    createField: (state, action) => {
      const newField = {
        id: new Date().toDateString(),
        type: action.payload.type,
        value: action.payload.value,
        name: action.payload.name,
      }

      state.push(newField)
    },
    deleteField: (state, {payload}) => {
      return state.filter((item) => item.id !== payload.id)
    },
  },
})

export const {createField, deleteField} = appSlice.actions
