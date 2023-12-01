export class ProductsController{
    constructor ({ productModel }) {
        this.productModel = productModel
    }
    // este metodo mas adelante solo debe obtener como maximo 50 productos para poder ser ocupado para cargar los productos en la pagina
    getAll = async (req, res) => {
        const products = await this.productModel.getAll()
        res.json(products)
    }

    getById = async (req, res) => {
        const {id} = req.params
        const product = await this.productModel.getById({ id })
        if (product) return res.json(product)
        res.status(404).json({ message: 'Product not found'})
    }

    getByCategory = async (req, res) => {
        
    }

    updateStock = async(req, res) => {
        
    }
}