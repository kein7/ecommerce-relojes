import * as React from 'react'
import { useState } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  InputBase
} from '@mui/material'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import NavbarIcons from './NavbarIcons'

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar sx={{ height: 20 }}>
          <IconButton color="inherit">Mujer</IconButton>
          <IconButton color="inherit">Hombre</IconButton>
          <IconButton color="inherit">Niños</IconButton>

          <Typography
            component={Link}
            to="/"
            align="center"
            sx={{ ml: 80, fontSize: 40, color: 'white' }}
            style={{ textDecoration: 'none' }}
          >
            Shop
          </Typography>

          <Typography sx={{ flexGrow: 1 }}></Typography>

          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'spaceBetween'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                m: 2
              }}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </Box>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ color: 'white' }}
            />
          </Box>
          <NavbarIcons></NavbarIcons>
        </Toolbar>

        <Toolbar>
          <Button color="inherit"> Novedades</Button>
          <Button color="inherit"> Tendencias</Button>
          <Button color="inherit"> Ofertas</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
