import {
  validateUser,
  validatePartialUser,
  validateCreateUser
} from '../schemas/users.js'

export class UsersController {
  constructor({ userModel }) {
    this.userModel = userModel
  }

  getAll = async (req, res) => {
    console.log(this.userModel)
    const users = await this.userModel.getAll()
    res.json(users)
  }

  getById = async (req, res) => {}

  create = async (req, res) => {
    const result = validateCreateUser(req.body)

    if (result.error) {
      // tambien se puede usar un 422: Unproccessable entity
      return res.status(400).json({ error: result.error.message })
    }

    try {
      const newUser = await this.userModel.create({ input: result })
      res.status(201).json(newUser) // actualizar el cache del cliente
    } catch (error) {
        if (error.customError) {
            res.status(400).json({ error: error.customError })
        } else {
            res.status(500).json({error: 'Internal server error'})
        }
    }    
  }

  delete = async (req, res) => {}

  update = async (req, res) => {}
}
