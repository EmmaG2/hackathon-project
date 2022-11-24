import {useDispatch} from 'react-redux'
import {Grid, Typography, Box, Button} from '@mui/material'
import React from 'react'
import {startGoogleSignIn} from '../../context/slices/auth'

export const Login = () => {
  const dispatch = useDispatch()
  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <Grid
      justifyContent='center'
      align='center'
      item
      xs={12}
      md={6}
      sx={{
        heigth: '100%',
      }}>
      <Typography component='h1' fontSize={25} mb={5}>
        Registro
      </Typography>

      <Box w={100}>
        <Button
          sx={{mr: 1}}
          onClick={onGoogleSignIn}
          variant='outlined'
          color='primary'>
          Google
        </Button>
      </Box>
    </Grid>
  )
}
