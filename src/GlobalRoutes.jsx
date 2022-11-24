import {Box} from '@mui/material'
import {Navigate, Route, Routes} from 'react-router-dom'
import {AdminRouter} from './admin/routes'
import {AppRoutes} from './app/routes'
import {AuthRouter} from './auth/routes'
import {GlobalNavbar} from './global/components'
import {LandingRouter} from './landing/routes'

export const GlobalRoutes = () => {
  return (
    <>
      <GlobalNavbar />

      <Box
        sx={{
          m: 3,
        }}>
        <Routes>
          <Route path='/app/*' element={<AppRoutes />} />
          <Route path='/landing/*' element={<LandingRouter />} />
          <Route path='/auth/*' element={<AuthRouter />} />
          <Route path='/admin/*' element={<AdminRouter />} />
          <Route path='/*' element={<Navigate to={'/auth/register'} />} />
        </Routes>
      </Box>
    </>
  )
}
