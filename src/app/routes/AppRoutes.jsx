import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {HomePage, OtherPage, PrincipalData, SecondaryData} from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<HomePage />} />
      <Route path='/principal' element={<PrincipalData />} />
      <Route path='/secondary' element={<SecondaryData />} />
      <Route path='/*' element={<Navigate to={'/home'} />} />
    </Routes>
  )
}
