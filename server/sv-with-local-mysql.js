import { createApp } from './app.js'

import { ProductsModel } from './Models/mysql/products-model.js'
import { UsersModel } from './Models/mysql/users-model.js'

createApp({ productModel: ProductsModel, userModel: UsersModel})