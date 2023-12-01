import { Router } from 'express'

import { ProductsController } from '../Controllers/products-controller.js'

/* Leer un JSON en ESModules
import fs from 'node:fs'
const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))
*/

export const createProductsRouter = ({ productModel }) => {
  const productRouter = Router()

  const productController = new ProductsController({ productModel })

  productRouter.get('/', productController.getAll)
  productRouter.get('/:id', productController.getById)
  productRouter.patch('/:id', productController.updateStock)
  return productRouter
}