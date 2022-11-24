import {Grid, TextField, Typography, Box, Button} from '@mui/material'
import React from 'react'

export default function Login() {
  return (
    <Grid>
      <Typography component='h1' fontSize={25}>Registro</Typography>

      <br />

        <Button
        sx={{ mr: 1 }}
        type="submit"
        variant="outlined"
        color="primary"
        >
            Login
        </Button>
    </Grid>
  )
}
