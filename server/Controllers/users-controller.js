import { validateUser, validatePartialUser } from '../schemas/users.js'

export class UsersController {
    constructor ({ userModel }) {
        this.userModel = userModel
    }

    getAll = async (req, res) => {
        console.log(this.userModel)
        const users = await this.userModel.getAll()
        res.json(users)
    }

    getById = async (req, res) => {
        
    }

    create = async (req, res) => {

    }

    delete = async (req, res) => {

    }

    update = async (req, res) => {
        
    }
}