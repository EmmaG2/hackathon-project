import {Box, Typography} from '@mui/material'
import React from 'react'
import {useSelector} from 'react-redux'

export const FieldsList = () => {
  const fields = useSelector((state) => state.app)

  return (
    <div>
      {fields.map((i) => (
        <Box>
          <Typography>{i.id}</Typography>
          <Typography>{i.type}</Typography>
        </Box>
      ))}
    </div>
  )
}
