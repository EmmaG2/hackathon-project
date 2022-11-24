import {Grid, Typography} from '@mui/material'
import {useSelector} from 'react-redux'

export const HomePage = () => {
  const {displayName} = useSelector((state) => state.auth)

  return (
    <Grid container>
      <Grid item>
        <Typography>
          Bienvenido <Typography>{displayName}</Typography>
        </Typography>
      </Grid>
    </Grid>
  )
}
