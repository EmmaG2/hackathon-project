import {Box, Button, Container, TextField} from '@mui/material'
import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {createField} from '../../context/slices/app'

export const AddField = () => {
  const {register, watch, handleSubmit} = useForm()

  const dispatch = useDispatch()

  const onSubmit = (data) => {
    console.log(data.type)
    dispatch(createField(data.type))
  }

  return (
    <Box
      sx={{
        display: 'flex',
        m: 4,
      }}>
      <Container maxWidth='xs'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant='outlined'
            type='text'
            placeholder='Add field'
            label='agregar campo'
            {...register('type')}></TextField>

          <Button variant='outlined' type='submit'>
            Save
          </Button>
        </form>
      </Container>
    </Box>
  )
}
