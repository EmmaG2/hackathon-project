import {Grid, TextField, Typography, Box, Button} from '@mui/material'
import React from 'react'

export default function Login() {
  return (
    <Grid justifyContent="center" align='center' item xs={12} md={6} sx={{
        heigth: '100%'
    }}
    >
      <Typography component='h1' fontSize={25} mb={5}>
        Registro
      </Typography>

      <Box w={100}>
        <Button
          sx={{mr: 1}}
          type='submit'
          variant='outlined'
          color='primary'>
          Google
        </Button>
      </Box>
    </Grid>
  )
}
