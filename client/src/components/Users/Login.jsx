import * as React from 'react'
import { useState, useEffect } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  TextField
} from '@mui/material'
import { Link, BrowserRouter, useParams } from 'react-router-dom'
import axios from 'axios'

export default function Login (){
    return(
        <Box
      sx={{
        mt: 20,
        flexDirection: 'column',
        '& .MuiInputBase-root': {
          height: 40,
          ml: 0,
          mb: 1
        }
      }}
      align="center"
    >
      <Typography variant={'h1'} sx={{ fontSize: 50 }}>
        Iniciar Sesión
      </Typography>
      <Typography sx={{ mt: 4 }}>Correo electronico</Typography>
      <TextField required sx={{}}></TextField>
      <Typography sx={{ mt: 2 }}>Contraseña</Typography>
      <TextField required></TextField>
      <Box>
        <Button>Iniciar Sesión</Button>
      </Box>
    </Box>
    )
}
