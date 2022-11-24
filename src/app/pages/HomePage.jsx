import {Grid, Typography, Box, Button} from '@mui/material'
import {useState} from 'react'

export const HomePage = () => {
  const defaultList = [
    {
      id: 1,
      field: 'nombre',
      type: 'Primaria',
      value: 'Julio Torres',
    },
    {
      id: 2,
      field: 'edad',
      type: 'Primaria',
      value: 22,
    },
    {
      id: 3,
      field: 'direccion',
      type: 'Secundaria',
      value:
        'México, Durango, dgo. Ciudad Victoria, Fracc las bugambilias, 34234 calle flor de nayeli #139',
    },
    {
      id: 4,
      field: 'tarjeta de crédito',
      type: 'Secundaria',
      value: '4568 5667 3423 0706 || 12/27 || 879',
    },
  ]

  let [list, updateList] = useState(defaultList)

  const handleRemoveItem = (id) => {
    console.log(id)
    updateList(list.filter((item) => item.id !== id))
  }

  return (
    <Grid container>
      <Grid xs={12} item>
        <Typography component='h1'>Bienvenido</Typography>
      </Grid>
      <Grid xs={12} item>
        <Typography component='h1'>Esta es tu información</Typography>
      </Grid>
      <Grid xs={12} item>
        <Box
          component='ul'
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          {list.map((i) => (
            <Box
              key={i.id}
              component='li'
              sx={{
                mt: 5,
              }}>
              <Typography component={'p'}>Dato: {i.field}</Typography>
              <Typography component={'p'}>tipo: {i.type}</Typography>
              <Typography component={'p'}>valor: {i.value}</Typography>
              <Button variant='outlined' onClick={() => handleRemoveItem(i.id)}>
                Denegar acceso
              </Button>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  )
}
