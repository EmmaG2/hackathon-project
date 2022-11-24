import {configureStore} from '@reduxjs/toolkit'
import {appSlice} from './slices/app'
import {authSlice} from './slices/auth'
import {userDataSlice} from './slices/users'

export default configureStore({
  reducer: {
    userData: userDataSlice.reducer,
    auth: authSlice.reducer,
    app: appSlice.reducer,
  },
})
