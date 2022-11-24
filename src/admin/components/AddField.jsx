import {Box, Button, Container, TextField} from '@mui/material'
import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {createField} from '../../context/slices/app'

export const AddField = () => {
  const {register, handleSubmit} = useForm()

  const dispatch = useDispatch()

  const onSubmit = (data) => {
    console.log(data)
    dispatch(createField(data))
  }

  return (
    <Box
      sx={{
        display: 'flex',
        m: 4,
      }}>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
        maxWidth='xs'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant='outlined'
            type='text'
            placeholder='type field'
            label='tipo campo'
            sx={{
              mt: 2,
              mb: 2,
            }}
            {...register('type')}></TextField>
          <TextField
            variant='outlined'
            type='text'
            placeholder='name field'
            label='name field'
            sx={{
              mt: 2,
              mb: 2,
            }}
            {...register('name')}></TextField>
          <TextField
            variant='outlined'
            type='text'
            placeholder='value field'
            label='valor del campo'
            sx={{
              mt: 2,
              mb: 2,
            }}
            {...register('value')}></TextField>

          <Button variant='outlined' type='submit'>
            Save
          </Button>
        </form>
      </Container>
    </Box>
  )
}
