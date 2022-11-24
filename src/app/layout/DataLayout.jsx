import {Grid, Typography} from '@mui/material'
import React from 'react'

export const DataLayout = ({children}) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          component={'h1'}
          sx={{
            fontSize: '2rem',
          }}>
          Esta es tu data:
        </Typography>
      </Grid>

      <Grid item>{children}</Grid>
    </Grid>
  )
}
