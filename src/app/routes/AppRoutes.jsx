import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage, OtherPage } from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/other-page' element={<OtherPage />} />
    </Routes>
  )
}
