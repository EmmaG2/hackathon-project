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
        Por favor, haz sesion con Google
      </Typography>

      <Box w={100}>
        <Button onClick={onGoogleSignIn} variant='outlined' color='primary'>
          <img
            src='https://www.freepngimg.com/thumb/google/67058-logo-search-google-icon-free-clipart-hq.png'
            width={60}></img>
        </Button>
      </Box>
    </Grid>
  )
}
