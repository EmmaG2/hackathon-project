import {Typography} from '@mui/material'
import React from 'react'
export const HomePage = () => {
  return (
    <>
      <Typography
        component={'h1'}
        variant={'h3'}
        sx={{
          color: 'primary.main',
        }}>
        Home Page
      </Typography>
    </>
  )
}
