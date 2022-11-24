import {Box, Typography} from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'

export const GlobalNavbar = () => {
  return (
    <Box
      component='nav'
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
      <Typography
        component={'p'}
        sx={{
          display: 'flex',
          fontSize: '2rem',
        }}>
        seg
        <Typography component={'span'} sx={{fontSize: '2rem', color: '#f00'}}>
          Dattax
        </Typography>
      </Typography>
      <Box
        component='ul'
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Box
          component='li'
          sx={{
            mx: 2,
          }}>
          <Link to={'/app/home'}>Home</Link>
        </Box>
        <Box
          component='li'
          sx={{
            mx: 2,
          }}>
          <Link to={'/landing/about'}>About</Link>
        </Box>
        <Box
          component='li'
          sx={{
            mx: 2,
          }}>
          <Link to={'/auth/register'}>Register</Link>
        </Box>
      </Box>
    </Box>
  )
}
