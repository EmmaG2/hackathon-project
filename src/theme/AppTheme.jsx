import {ThemeProvider} from '@emotion/react'
import {CssBaseline} from '@mui/material'
import React from 'react'
import {cattpuccinTheme} from './catpuccinThem'

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={cattpuccinTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
