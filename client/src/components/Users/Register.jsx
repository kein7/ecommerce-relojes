import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Link, BrowserRouter, useParams } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  const form = useRef()

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const formData = new FormData(form.current)

      const jsonObject = {
        email: formData.get('email'),
        password: formData.get('password')
        // Add other fields as needed
      }

      console.log(jsonObject)
      const response = await axios.post(
        'http://localhost:3000/users',
        jsonObject,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      console.log('Response:', response.data)
      setErrorMessage('')
      // Reset the form after successful submission
      reset()
    } catch (error) {
      const errorMessage = error.response.data.error

      console.error('Error:', errorMessage)
      setErrorMessage(errorMessage)
    }
  }

  return (
    <Box
      component="form"
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        mt: 20,
        flexDirection: 'column',
        '& .MuiInputBase-root': {
          height: 40,
          width: 400,
          ml: 0,
          mb: 1
        }
      }}
      align="center"
    >
      <Typography variant={'h1'} sx={{ fontSize: 50 }}>
        Crear cuenta
      </Typography>

      <Typography sx={{ mt: 2}}>Correo electronico</Typography>
      <TextField 
        {...register('email', {
          required: 'El email es requerido',
          maxLength: 50,
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Ingrese un correo valido'
          }
        })}
      ></TextField>
      <Typography sx={{color: 'red'}}>{errors.email?.message}</Typography>

      <Typography sx={{ mt: 2 }}>Contraseña</Typography>
      <FormControl id="password" sx={{ m: 1 }}>
        <OutlinedInput
          type={showPassword ? 'text' : 'password'}
          {...register('password', {
            required: 'La contraseña es requerida',
            minLength: {
              value: 6,
              message: 'La contraseña debe tener minimo 6 caracteres'
            },
            maxLength: 30
          })}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Typography sx={{color: 'red'}}>{errors.password?.message}</Typography>

      <Typography sx={{ mt: 2 }}>Confirmar contraseña</Typography>
      <FormControl id="confirmPassword" sx={{ m: 1 }}>
        <OutlinedInput
          type={showPassword ? 'text' : 'password'}
          {...register('confirmPassword', {
            required: 'Confirmar la contraseña es requerido',
            maxLength: 30,
            validate: (value) =>
              value === watch('password') || 'Contraseñas no coinciden'
          })}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Typography sx={{color: 'red'}}>{errors.confirmPassword?.message}</Typography>

      <Box>
        {errorMessage === '' ? '' : <Typography sx={{color: 'red'}}>{errorMessage}</Typography>}
        
        <Button type="submit">Registrarse</Button>
      </Box>
    </Box>
  )
}
