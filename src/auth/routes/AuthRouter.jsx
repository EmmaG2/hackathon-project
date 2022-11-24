import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {useCheckAuth} from '../../global/hooks'
import {RegisterPage} from '../pages'

export const AuthRouter = () => {
  const {status} = useCheckAuth()

  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route path='/*' element={<Navigate to={'/landing/home'} />} />
      ) : (
        <Route path='/register' element={<RegisterPage />} />
      )}
    </Routes>
  )
}
