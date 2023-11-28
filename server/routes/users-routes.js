import { Router } from 'express'

import { UsersController } from '../Controllers/users-controller.js'

/* Leer un JSON en ESModules
import fs from 'node:fs'
const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))
*/

export const createUsersRouter = ({ userModel }) => {
  const usersRouter = Router()

  const userController = new UsersController({ userModel })

  usersRouter.get('/', userController.getAll)
  usersRouter.get('/:id', userController.getById)
  usersRouter.post('/', userController.create)
  usersRouter.patch('/:id', userController.update)

  return usersRouter
}