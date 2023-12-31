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
import axios from 'axios'
import { ProductContent, mapDto } from '../Products/ProductContent'

export default function Feed() {
  const [products, setProducts] = useState()

  async function getProducts() {
    const { data } = await axios.get('http://localhost:3000/products')
    setProducts(data.map((item) => mapDto(item)))
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Box id="feed-products" sx={{mt:20}}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          flexWrap: { md: 'wrap' },
          justifyContent: 'center',
          ml: { xs: 1 },
          mr: { xs: 1 }
        }}
      >
        {products?.map((product, key) => (
          <ProductContent
            key={`product-${key}`}
            product={product}
          ></ProductContent>
        ))}
      </Box>
    </Box>
  )
}
