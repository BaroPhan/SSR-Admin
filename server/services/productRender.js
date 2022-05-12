const axios = require('axios');

exports.addProduct = (req, res) => {
    res.render('pages/Products/addProduct');
}

exports.getProducts = async (req, res) => {
    try {
        const products = await axios.get('http://localhost:3000/api/products',
            {
                headers: {
                    'Authorization': 'Bearer ' + req.cookies.jwt
                }
            })
        res.render('pages/Products/products', { products: products.data })
    } catch (error) {
        res.send(error)
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const product = await axios.get(`http://localhost:3000/api/products?id=${req.query.id}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + req.cookies.jwt
                }
            })
        res.render('pages/Products/updateProduct', { product: product.data })
    } catch (error) {
        res.send(error)
    }
}