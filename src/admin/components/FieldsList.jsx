import {Box, Typography} from '@mui/material'
import React from 'react'
import {useSelector} from 'react-redux'

export const FieldsList = () => {
  const fields = useSelector((state) => state.app)

  return (
    <div>
      {fields.map((i) => (
        <Box
          sx={{
            m: 3,
          }}
          key={i.id}>
          <Typography>Id: {i.id}</Typography>
          <Typography>Tipo: {i.type}</Typography>
          <Typography>Nombre: {i.name}</Typography>
          <Typography>Valor: {i.value}</Typography>
        </Box>
      ))}
    </div>
  )
}
