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
import reloj_img from '../img/reloj-rolex.jpg'
import axios from 'axios'

export default function ProductPage() {
  const { productId } = useParams()
  const [product, setProduct] = useState()

  async function getProducts() {
    const { data } = await axios.get(
      `http://localhost:3000/products/${productId}`
    )
    setProduct(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  if(!product){
    return (<Box><Typography>Product not found</Typography></Box>)
  }

  return (<Box sx={{}}>
    <Box>product.name</Box>
  </Box>)
}
