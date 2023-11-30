import * as React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@mui/material'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'

import reloj_img from '../../img/reloj-rolex.jpg'

export function mapDto(dto) {
  return {
    id: dto.id,
    name: dto.name,
    description: dto.description,
    price: dto.price,
    size: dto.size,
    brand: dto.brand,
    category: dto.category
  }
}

export function ProductContent({ product }) {
  return (
    
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: { xs: 120, sm: 150, md: 200 },
          height: { xs: 130, sm: 130, md: 130 },
          m: { xs: 2, md: 1, lg: 2 },
          p: { xs: 2.5, md: 3, lg: 3 },
          color: '#C1C1C1'
        }}
      >
        <Link to={`/product/${product.id}`}>
        <Box name="Top" sx={{}}>
          <Box
            component="img"
            sx={{
              height: 200,
              width: 200,
              maxHeight: { xs: 200, md: 400, lg: 500 },
              maxWidth: { xs: 200, md: 400, lg: 500 }
            }}
            src={reloj_img}
            alt="reloj"
          ></Box>
        </Box>
        <Box name="Bottom" sx={{ color: 'black' }} >
          <Box sx={{ justifyContent: 'center' }} align="center">
            <Typography>{product.name}</Typography>
            <Typography>{product.brand}</Typography>
            <Typography>{product.price}</Typography>
          </Box>
        </Box>
        </Link>
      </Box>
    
  )
}
