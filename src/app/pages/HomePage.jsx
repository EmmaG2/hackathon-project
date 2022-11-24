import {Grid, Typography, Box, Button} from '@mui/material'
import {useState} from 'react'
import DataCard from '../Components/DataCard'

export const HomePage = () => {
  const defaultList = [
    {
      id: 1,
      field: 'nombre',
      type: 'Primaria',
      value: 'Julio Torres',
      access: true,
    },
    {
      id: 2,
      field: 'edad',
      type: 'Primaria',
      value: 22,
      access: true,
    },
    {
      id: 3,
      field: 'direccion',
      type: 'Secundaria',
      value:
        'México, Durango, dgo. Ciudad Victoria, Fracc las bugambilias, 34234 calle flor de nayeli #139',
      access: true,
    },
    {
      id: 4,
      field: 'tarjeta de crédito',
      type: 'Secundaria',
      value: '4568 5667 3423 0706 || 12/27 || 879',
      access: true,
    },
  ]

  let [list, updateList] = useState(defaultList)

  return (
    <Grid container>
      <Grid xs={12} item>
        <Typography component='h1' fontSize={30}>
          Bienvenido
        </Typography>
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
            <DataCard key={i.id} i={i} />
          ))}
        </Box>
      </Grid>
    </Grid>
  )
}
