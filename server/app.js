import express, { json } from 'express'
import { createProductsRouter } from './routes/products-routes.js'
import { createUsersRouter } from './routes/users-routes.js'
import { corsMiddleware } from './middlewares/cors.js'

export const createApp = ({ productModel, userModel }) => {
  const app = express()
  app.use(json())
  app.disable('x-powered-by')

  app.use(corsMiddleware())

  app.use('/products', createProductsRouter({ productModel }))
  app.use('/users', createUsersRouter({ userModel }))

  const PORT = process.env.PORT ?? 3000

  app.listen(PORT, () => {
    console.log(`Server listening in port http://localhost:${PORT}`)
  })
}
