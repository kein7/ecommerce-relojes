import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton
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

export default function NavBarIcons({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal
}) {
  const [active, setActive] = useState(false)
  // Use a separate state for cart box to control its visibility

  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id)

    setTotal(total - product.price * product.quantity)
    setCountProducts(countProducts - product.quantity)
    setAllProducts(results)
  }

  const onCleanCart = () => {
    setAllProducts([])
    setTotal(0)
    setCountProducts(0)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', mr: 5 }}>
      {navbarIcons.map((item, index) => (
        <Box name="icons" key={index} sx={{ m: 1, position: 'relative' }}>
          {item.name === 'Lang' ? (
            <IconButton color="inherit">
              <FontAwesomeIcon
                icon={item.icon}
                key={index}
                m={20}
              ></FontAwesomeIcon>
            </IconButton>
          ) : item.name === 'Cart' ? (
            <Box sx={{ position: 'relative' }}>
              <IconButton
                name="cart-icon"
                color="inherit"
                LinkComponent={Link}
                to={item.url}
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  key={index}
                  m={20}
                ></FontAwesomeIcon>
              </IconButton>
              {countProducts}
              <Box
                name="cart"
                sx={{
                  position: 'absolute',
                  display: `${active ? 'flex' : 'none'}`,
                  flexDirection: 'column',
                  border: 2,
                  borderRadius: 1,
                  borderColor: 'white',
                  background: 'gray',
                  justifyContent: 'center',
                  p: 1
                }}
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
              >
                {allProducts.length ? (
                  <Box>
                    {allProducts.map((product, index) => (
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
                        <Typography sx={{ ml: 1, mr: 1 }}>
                          {'$' + product.price}
                        </Typography>
                        <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
                      </Box>
                    ))}
                    <Box sx={{m:2}}>
                      <Typography>Total: {total}</Typography>
                    </Box>
                  </Box>
                ) : (
                  <Box>Carrito vacio</Box>
                )}
              </Box>
            </Box>
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
