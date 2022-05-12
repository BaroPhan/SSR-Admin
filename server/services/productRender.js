const axios = require('axios');

exports.addUser = (req, res) => {
    res.render('pages/Users/addUser');
}

exports.getProducts = async (req, res) => {
    try {
        const products = await axios.get('http://localhost:3000/api/products')
        res.render('pages/Products/products', { products: products.data })
    } catch (error) {
        res.send(error)
    }
}

exports.updateUser = async (req, res) => {
    try {
        const user = await axios.get(`http://localhost:3000/api/users?id=${req.query.id}`)
        res.render('pages/Users/updateUser', { user: user.data })
    } catch (error) {
        res.send(error)
    }
}