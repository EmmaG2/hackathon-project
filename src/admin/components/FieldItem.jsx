import React from 'react'
import {useSelector} from 'react-redux'

export const FieldItem = () => {
  const fields = useSelector((state) => state.app)

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {}
    </Box>
  )
}
