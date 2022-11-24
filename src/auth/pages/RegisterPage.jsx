import React from 'react'
import {Login, UserCard} from '../components'
import {useSelector} from 'react-redux'
import {Typography} from '@mui/material'
import {Box} from '@mui/system'

export const RegisterPage = () => {
  const {status} = useSelector((state) => state.auth)

  return (
    <Box
      flex
      justifyContent={'center'}
      align='center'
      sx={{
        width: '100%',
      }}>
      <Login />

      {status === 'authenticated' ? (
        <Box>
          <Typography
            sx={{
              mt: 2,
              mb: 2,
            }}>
            Autorizado con exito
          </Typography>
          <UserCard />
        </Box>
      ) : null}
    </Box>
  )
}
