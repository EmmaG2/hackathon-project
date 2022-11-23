import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {RegisterPage} from '../pages'

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  )
}
