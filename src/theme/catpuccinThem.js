import { createTheme } from '@mui/material'
import { grey, red } from '@mui/material/colors'

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
    info:{
      main:'#89b4fa'
    },
    success:{
      main:'#a6e3a1'
    },
    grey:{
      main: '#6c7086'	
    },
    text:{
      main: '#181825'
    }
    
  },
})