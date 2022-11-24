import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {AddData, AnalyticsPage, HomePage} from '../pages'

export const AdminRouter = () => {
  return (
    <Routes>
      <Route path='/add-data' element={<AddData />} />
      <Route path='/analytics' element={<AnalyticsPage />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
  )
}
