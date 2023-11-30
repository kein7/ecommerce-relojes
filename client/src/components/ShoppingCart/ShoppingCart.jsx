import * as React from 'react'
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

export default function ShoppingCart({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal
}) {
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
    <Box align="center">
      <Typography variant="h1" sx={{ mt: 20, fontSize: 50 }}>
        Carrito de compras
      </Typography>
      <Box name="List products">
        {allProducts.length ? (
          <Box>
            {allProducts.map((product, index) => (
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
                <FontAwesomeIcon
                  onClick={() => onDeleteProduct(product)}
                  icon={faX}
                ></FontAwesomeIcon>
              </Box>
            ))}
            <Typography>Total: ${total}</Typography>
            <Button>Comprar</Button>
            <Button onClick={() => onCleanCart()}>Limpiar todo</Button>
          </Box>
        ) : (
          <Box>Carrito vacio</Box>
        )}
      </Box>
    </Box>
  )
}
