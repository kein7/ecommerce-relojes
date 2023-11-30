import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '12131415',
  database: 'ecommerce'
}

const connection = await mysql.createConnection(config)

export class ProductsModel {
  static async getAll() {
    const [products] = await connection.query(
      `SELECT BIN_TO_UUID(product.id) id, product.name, product.description, product.price, product.size, brand.name AS brand, product_category.name AS category, product_inventory.quantity 
      FROM product JOIN brand ON product.brand_id = brand.id JOIN product_category ON product.category_ID = product_category.id JOIN product_inventory ON product.inventory_ID = product_inventory.id;`
      )
    return products
  }

  static async getById({ id }) {
    const [products] = await connection.query(
      `SELECT BIN_TO_UUID(product.id) id, product.name, product.description, product.SKU AS sku, product.price, product.size, brand.name AS brand, product_category.name AS category, product_inventory.quantity AS stock 
      FROM product JOIN brand ON product.brand_id = brand.id JOIN product_category ON product.category_ID = product_category.id JOIN product_inventory ON product.inventory_ID = product_inventory.id 
      WHERE product.id = UUID_TO_BIN(?);`,
      [id]
    )

    if(products.length === 0) return null

    return products[0]
  }
  static async update({ id, input }) {}
}
