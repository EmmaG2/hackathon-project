import {Grid, Typography} from '@mui/material'
import {useSelector} from 'react-redux'
import {AddField, FieldsList} from '../components'

export const HomePage = () => {
  const {displayName} = useSelector((state) => state.auth)

  return (
    <Grid container flex justifyContent={'center'}>
      <Grid
        item
        xs={12}
        sx={{
          textAlign: 'center',
        }}>
        <Typography>
          Bienvenido
          <Typography
            sx={{
              color: 'secondary.main',
              ml: 0.5,
            }}
            component={'span'}>
            {displayName}
          </Typography>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          sx={{
            textAlign: 'center',
          }}>
          ¿Qué es lo que deseas hacer?
        </Typography>
      </Grid>
      <Grid item>
        <AddField />
        <FieldsList />
      </Grid>
    </Grid>
  )
}
