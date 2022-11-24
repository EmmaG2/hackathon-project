import React, {useState} from 'react'
import {Box, Typography, Button} from '@mui/material'

function DataCard({i}) {
  const [access, setAccess] = useState(true)

  function handleAccess() {
    setAccess(!access)
  }

  return (
    <Box
      key={i}
      component='li'
      sx={{
        mt: 5,
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px, rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        borderRadius: '5px',
      }}
      p={2}>
      <Typography component={'p'}>Dato: {i.field}</Typography>
      <Typography component={'p'}>Tipo: {i.type}</Typography>
      <Typography component={'p'}>Valor: {i.value}</Typography>
      <Typography component={'p'}>
        Acceso: {access ? 'Acceso permitido' : 'Acceso denegado'}
      </Typography>
      <Button
        variant={'contained'}
        sx={{
          mt: '10px',
        }}
        color={access ? 'error' : 'success'}
        onClick={() => handleAccess()}>
        {access ? 'Denegar acceso' : 'Permitir acceso'}
      </Button>
    </Box>
  )
}

export default DataCard
