import mysql from 'mysql2/promise'

const config = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '12131415',
    database: 'ecommerce'
  }

const connection = await mysql.createConnection(config)

export class UsersModel {
  static async getAll () {
    const [users] = await connection.query(
      'SELECT BIN_TO_UUID(id) id, username, first_name, last_name, country, telephone, created_at FROM users;'
    )

    return users
  }

  static async getById ({ id }) {
    
  }
  static async create ({ input }) {}
  static async update ({ id, input }) {}
}
