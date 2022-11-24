import {Grid, Typography} from '@mui/material'
import React from 'react'

export const DataLayout = ({children}) => {
  return (
    <Grid container>
      <Typography component={'h1'}>{title}</Typography>

      {children}
    </Grid>
  )
}
