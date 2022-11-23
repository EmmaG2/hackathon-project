import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {AppRoutes} from './app/routes'

export const GlobalRoutes = () => {
  return (
    <Routes>
      <Route path='/app/*' element={<AppRoutes />} />
    </Routes>
  )
}
