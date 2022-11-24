import {Box, Button, Container, TextField} from '@mui/material'
import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {createField} from '../../context/slices/app'

export const AddField = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const dispatch = useDispatch()

  const onSubmit = (data) => {
    console.log(data)
    dispatch(createField(data))
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        m: 2,
      }}>
      <Box
        item
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        maxWidth='md'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <TextField
              variant='outlined'
              type='text'
              placeholder='number'
              label='tipo del dato'
              sx={{
                mt: 2,
                mb: 2,
              }}
              error={!!errors?.type}
              helperText={errors?.type ? errors.type.message : null}
              {...register('type', {
                required: 'Este campo es obligatorio',
                min: {
                  value: 4,
                  message: 'Este campo debe contener como mínimo, 3 caractéres',
                },
              })}></TextField>
          </Box>
          <Box>
            <TextField
              variant='outlined'
              type='text'
              placeholder='edad'
              label='Nombre del campo'
              sx={{
                mt: 2,
                mb: 2,
              }}
              error={!!errors?.name}
              helperText={errors?.name ? errors.name.message : null}
              {...register('name', {
                required: 'Este campo es obligatorio',
                min: {
                  value: 4,
                  message: 'Este campo debe contener al menos 4 caractéres',
                },
              })}></TextField>
          </Box>
          <Box>
            <TextField
              variant='outlined'
              type='text'
              placeholder='18'
              label='valor del campo'
              sx={{
                mt: 2,
                mb: 2,
              }}
              error={!!errors?.value}
              helperText={errors?.value ? errors.value.message : null}
              {...register('value', {
                required: 'Este campo es obligatorio',
                min: {
                  value: 4,
                  message: 'Este campo debe contener al menos 4 caractéres',
                },
              })}></TextField>
          </Box>

          <Button variant='outlined' type='submit'>
            Save
          </Button>
        </form>
      </Box>
    </Box>
  )
}
