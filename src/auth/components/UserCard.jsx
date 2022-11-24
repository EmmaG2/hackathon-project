import {Button, Grid, Typography} from '@mui/material'
import {useSelector, useDispatch} from 'react-redux'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import {useRoutesNavigate} from '../../global/hooks'
import {startLogout} from '../../context/slices/auth/thunks'

export const UserCard = () => {
  const {photoURL, displayName} = useSelector((state) => state.auth)
  const {onNavigateTo} = useRoutesNavigate()
  const dispatch = useDispatch()
  const onLogout = () => {
    console.log('working')
    dispatch(startLogout())
  }

  return (
    <Grid
      container
      flex
      justifyContent={'center'}
      sx={{
        // border: '1px solid red',
        borderRadius: '5px',
        p: 2,
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px, rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        maxWidth: '500px',
      }}>
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          m: 2,
        }}>
        <LazyLoadImage
          style={{
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
          }}
          alt={displayName}
          effect='blur'
          src={photoURL}
        />
      </Grid>
      <Grid
        flex
        justifyContent={'center'}
        item
        xs={12}
        sx={{
          textAlign: 'center',
        }}>
        <Typography>
          Bienvenido:{' '}
          <Typography
            component={'span'}
            sx={{
              color: 'primary.main',
              fontWeigth: 700,
            }}>
            {displayName}
          </Typography>
        </Typography>
      </Grid>
      <Grid
        flex
        justifyContent={'center'}
        item
        xs={12}
        sx={{
          textAlign: 'center',
        }}>
        <Typography>Es grandioso verte de nuevo :)</Typography>
        <Typography>
          Ingeresa a la aplicación haciendo click en el siguiente botón
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          sx={{
            mt: 2,
          }}
          onClick={() => onNavigateTo('/app/home')}
          variant={'contained'}>
          Entrar como usuario
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          sx={{
            mt: 2,
          }}
          onClick={() => onNavigateTo('/admin/home')}
          variant={'contained'}>
          Entrar como empresa
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          sx={{
            mt: 2,
          }}
          onClick={onLogout}
          color='error'
          variant={'contained'}>
          Cerrar sesión
        </Button>
      </Grid>
    </Grid>
  )
}
