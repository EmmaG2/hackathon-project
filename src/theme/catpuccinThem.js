import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'

export const cattpuccinTheme = createTheme({
  palette: {
    primary: {
      main: '#262254',
    },
    secondary: {
      main: '#543885',
    },
    error: {
      main: red.A400,
    },
  },
})