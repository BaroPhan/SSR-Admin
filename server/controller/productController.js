const Product = require('../models/Product')
// const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

//GET PRODUCT/PRODUCTS
exports.get = async (req, res) => {
    try {
        if (req.query.id) {
            const product = await Product.findById(req.query.id)
            res.status(200).json(product)
        } else {
            const products = await Product.find()
            res.status(200).json(products)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

//CREATE A PRODUCT
exports.post = async (req, res) => {
    try {
        const categories = req.body.categories.split(',')
        const size = req.body.size.split(',')
        const color = req.body.color.split(',')

        const newProduct = new Product({ ...req.body, categories: categories, size: size, color: color })

        await newProduct.save()
        res.redirect('/add-product')
    } catch (error) {
        res.status(500).json(error)
    }
}

//UPDATE A PRODUCT
exports.put = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.redirect('/get-products', 303);
    } catch (error) {
        res.status(500).json(error)
    }
}

//DELETE A PRODUCT
exports.delete = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product deleted!")
    } catch (error) {
        res.status(500).json(error)
    }
}

