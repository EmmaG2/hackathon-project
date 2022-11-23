import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {AboutPage, HomePage} from '../pages'

export const LandingRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  )
}
