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
import { ProductContent, mapDto } from './ProductContent'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'

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
    <Box id="feed-products">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          flexWrap: { md: 'wrap' },
          justifyContent: 'center',
          mt: { md: 20 },
          ml: { xs: 1 },
          mr: { xs: 1 }
        }}
      >
        {products?.map((product, key) => (
          <Link to={`/product/${products.id}`}>
            <ProductContent
              key={`product-${key}`}
              product={product}
            ></ProductContent>
          </Link>
        ))}
      </Box>
    </Box>
  )
}
