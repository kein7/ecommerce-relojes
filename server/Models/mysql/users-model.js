import mysql from 'mysql2/promise'
import bcryptjs from 'bcryptjs'

const config = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '12131415',
  database: 'ecommerce'
}

const connection = await mysql.createConnection(config)

export class UsersModel {
  static async getAll() {
    const [users] = await connection.query(
      'SELECT BIN_TO_UUID(id) id, username, first_name, last_name, country, telephone, created_at FROM users;'
    )

    return users
  }

  static async getById({ id }) {}

  static async create({ input }) {
    const { email, password } = input.data

    try {
      const [validateEmail] = await connection.query(
        'SELECT email FROM users WHERE email = ?;',
        [email]
      )

      if (validateEmail.length > 0) {
        throw new Error('User already exists')
      } else {
        // crypto.randomUUID()
        const [uuidResult] = await connection.query('SELECT UUID() uuid;')
        const [{ uuid }] = uuidResult
        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(password, salt)
        
        try {
          const [users] = await connection.query(
            `INSERT INTO users(id, email, password, created_at) VALUES (UUID_TO_BIN("${uuid}"),?,?,CURRENT_TIMESTAMP);`,
            [email, hashPassword]
          )
        } catch (e) {
          throw new Error('Error creating user')
          // enviar la traza a un servicio interno
          // sendLog(e)
        }

        const [createdUser] = await connection.query(
          `SELECT BIN_TO_UUID(id) id, email, password, created_at
          FROM users WHERE id = UUID_TO_BIN(?);`,
          [uuid]
        )

        return createdUser[0]
      }
    } catch (error) {
      if (error.message === 'User already exists') {
        throw { customError: 'User already exists' }
      } else {
        throw { customError: 'Error creating user' }
      }
    }
  }

  static async update({ id, input }) {}
}
