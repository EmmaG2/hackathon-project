import {Grid, Typography} from '@mui/material'
import {useSelector} from 'react-redux'

export const HomePage = () => {
  const {displayName} = useSelector((state) => state.auth)

  return (
    <Grid container>
      <Grid item>
        <Typography>
          Bienvenido
          <Typography
            sx={{
              color: 'secondary.main',
              // fontWeight: 700,
              ml: 0.5,
            }}
            component={'span'}>
            {displayName}
          </Typography>
        </Typography>
      </Grid>
      <Grid item>Esta es la información que manejas de tus usuarios</Grid>
    </Grid>
  )
}
