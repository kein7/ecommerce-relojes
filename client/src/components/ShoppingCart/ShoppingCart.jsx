import * as React from 'react'
import { useCart } from '../../hooks/useCart.jsx'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

export default function ShoppingCart() {
  const { handleMinProduct, handleRemoveFromCart, handleClearCart, handleSumProduct, total, cart } = useCart()

  return (
    <Box align="center">
      <Typography variant="h1" sx={{ mt: 20, fontSize: 50 }}>
        Carrito de compras
      </Typography>
      <Box name="List products">
        {cart.length ? (
          <Box>
            {cart.map((product, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  m: 2,
                  justifyContent: 'center'
                }}
                align="center"
              >
                <Typography>{product.quantity}</Typography>
                <Typography sx={{ ml: 1 }}>{product.name}</Typography>
                <Typography sx={{ ml: 1, mr: 1 }}>
                  {'$' + product.price}
                </Typography>
                <Button onClick={() => handleSumProduct(product)}>
                  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </Button>

                <Button
                  onClick={() =>
                    `${
                      product.quantity !== 1
                        ? handleMinProduct(product)
                        : handleRemoveFromCart(product)
                    }`
                  }
                >
                  <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                </Button>

                <Button onClick={() => handleRemoveFromCart(product)}>
                  <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
                </Button>
              </Box>
            ))}
            <Typography>Total: ${total}</Typography>
            <Button>Ir a pago</Button>
            <Button onClick={() => handleClearCart()}>Limpiar todo</Button>
          </Box>
        ) : (
          <Box>
            <Typography>Carrito vacio</Typography>
          </Box>
        )}
      </Box>
    </Box>
  )
}
