import {Box, Button, Menu, Typography} from '@mui/material'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'

export const GlobalNavbar = () => {
  const [showNavbar, setshowNavbar] = useState(false)

  const handleNavbar = () => {
    setshowNavbar(!showNavbar)
    console.log(showNavbar)
  }

  return (
    <Box
      component='nav'
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
      <h1>
        Seg
        <Typography
          component='span'
          fontWeight={'700'}
          sx={{
            color: 'primary.main',
            fontSize: '2rem',
          }}>
          Dattax
        </Typography>
      </h1>
      <Button
        sx={{
          maxHeight: '80px',
          display: {
            xs: 'block',
            md: 'none',
          },
        }}
        onClick={handleNavbar}>
        <MenuIcon />
      </Button>
      <Box
        component='ul'
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: {
            xs: 'none',
            md: 'flex',
          },
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

      <Box
        component='ul'
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: {
            xs: showNavbar ? 'flex' : 'none',
            md: 'none',
          },
          position: 'absolute',
          width: '100%',
          heigth: '22rem',
          mt: '5rem',
          flexDirection: {
            xs: 'column',
          },
          backgroundColor: '#fff',
          p: 2,
        }}>
        <Box
          component='li'
          sx={{
            mx: 2,
          }}>
          <Link onClick={handleNavbar} to={'/app/home'}>
            Home
          </Link>
        </Box>
        <Box
          component='li'
          sx={{
            mx: 2,
          }}>
          <Link onClick={handleNavbar} to={'/landing/about'}>
            About
          </Link>
        </Box>
        <Box
          component='li'
          sx={{
            mx: 2,
          }}>
          <Link onClick={handleNavbar} to={'/auth/register'}>
            Register
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
