import * as React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  InputBase 
} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const navbarIcons = [
  { name: 'User', icon: faUser, url: '' },
  { name: 'Cart', icon: faCartShopping, url: '' },
  { name: 'Favs', icon: faHeart, url: '' },
  { name: 'Lang', icon: faGlobe, url: '' }
]

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar sx={{ height: 20 }}>
          <IconButton color="inherit">Mujer</IconButton>
          <IconButton color="inherit">Hombre</IconButton>
          <IconButton color="inherit">Niños</IconButton>

          
          <Typography sx={{ flexGrow: 1 }}></Typography>
          <Box sx={{position: "relative", display: "flex"}}>
            <Box sx={{display: "flex", alignItems: "center", justifyContent: 'center', m:2}}>
              <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </Box>
            <InputBase 
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{color: "white"}}
            />
          </Box>
          {navbarIcons.map((item, index) => (
            <Box key={index} sx={{ m: 1 }}>
              <IconButton color="inherit">
                <FontAwesomeIcon
                  icon={item.icon}
                  key={index}
                  m={20}
                ></FontAwesomeIcon>
              </IconButton>
            </Box>
          ))}
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
