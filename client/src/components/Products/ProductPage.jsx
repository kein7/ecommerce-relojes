import * as React from 'react'
import { useState, useEffect } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@mui/material'
import { Link, BrowserRouter, useParams } from 'react-router-dom'
import reloj_img from '../../img/reloj-rolex.jpg'
import axios from 'axios'

export function mapDto(dto) {
  return {
    id: dto.id,
    name: dto.name,
    description: dto.description,
    sku: dto.sku,
    price: dto.price,
    size: dto.size,
    brand: dto.brand,
    category: dto.category,
    stock: dto.stock,
    quantity: 1
  }
}

export default function ProductPage({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal
}) {
  const { id } = useParams()
  const [product, setProduct] = useState()

  async function getProducts() {
    const { data } = await axios.get(`http://localhost:3000/products/${id}`)
    setProduct(mapDto(data))
  }

  useEffect(() => {
    getProducts()
  }, [])

  if (!product) {
    return (
      <Box>
        <Typography>Product not found</Typography>
      </Box>
    )
  }

  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
      setTotal(total + product.price * product.quantity)
      setCountProducts(countProducts + product.quantity)
      return setAllProducts([...products])
    }
    setTotal(total + product.price * product.quantity)
    setCountProducts(countProducts + product.quantity)
    setAllProducts([...allProducts, product])
  }

  console.log(allProducts)

  return (
    <Box
      sx={{ mt: 20, ml: 70, alignItems: 'center', display: 'flex' }}
      align="center"
    >
      <Box
        component="img"
        sx={{
          height: 1000,
          width: 1000,
          maxHeight: { xs: 200, md: 400, lg: 500 },
          maxWidth: { xs: 200, md: 400, lg: 500 }
        }}
        src={reloj_img}
        alt="reloj"
      />
      <Box>
        <Typography variant="h1" sx={{ fontSize: 40 }}>
          {product.name}
        </Typography>
        <Typography>{product.price}</Typography>
        <Typography>{product.description}</Typography>
        <Typography>Stock: {product.stock}</Typography>
        <Button sx={{ mt: 2 }} onClick={() => onAddProduct(product)}>
          Agregar a carrito
        </Button>
      </Box>
    </Box>
  )
}
