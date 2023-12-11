import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useCart } from '../../hooks/useCart.jsx'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Tooltip
} from '@mui/material'
import { Link, BrowserRouter, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'

const navbarIcons = [
  { name: 'User', icon: faUser, url: '/user/index' },
  { name: 'Cart', icon: faCartShopping, url: '/shopping-cart' },
  { name: 'Favs', icon: faHeart, url: '/wishlist' },
  { name: 'Lang', icon: faGlobe, url: '' }
]

export default function NavBarIcons() {
  const { deleteProduct, countProducts, total, cart } = useCart()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', mr: 2 }}>
      {navbarIcons.map((item, index) => (
        <Box name="icons" key={index} sx={{ m: 1, position: 'relative' }}>
          {item.name === 'Lang' ? (
            <IconButton color="inherit">
              <FontAwesomeIcon icon={item.icon} key={index}></FontAwesomeIcon>
            </IconButton>
          ) : item.name === 'Cart' ? (
            <Tooltip
              title={
                <Box name="cart">
                  {cart.length ? (
                    <Box>
                    {cart.map((product, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          m: 2
                        }}
                      >
                        <Typography>{product.quantity}</Typography>
                        <Typography sx={{ ml: 1 }}>{product.name}</Typography>
                        <Typography sx={{ ml: 1, mr: 1 }}>{'$' + product.price}</Typography>
                        <Button
                          sx={{ height: 1.05, width: 1.05 }}
                          onClick={() => deleteProduct(product)}
                        >
                          <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
                        </Button>
                      </Box>
                    ))}
                    <Box sx={{ m: 2 }}>
                      <Typography>Total: {total}</Typography>
                    </Box>
                  </Box>
                  ) : (
                    <Typography>
                      <Box>Carrito vacio</Box>
                    </Typography>
                  )}
                </Box>
              }
            >
              <IconButton
                name="cart-icon"
                color="inherit"
                LinkComponent={Link}
                to={item.url}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  key={index}
                  m={20}
                ></FontAwesomeIcon>
                <Typography sx={{ ml: 1 }}>{countProducts}</Typography>
              </IconButton>
            </Tooltip>
          ) : (
            <IconButton color="inherit" LinkComponent={Link} to={item.url}>
              <FontAwesomeIcon
                icon={item.icon}
                key={index}
                m={20}
              ></FontAwesomeIcon>
            </IconButton>
          )}
        </Box>
      ))}
    </Box>
  )
}
