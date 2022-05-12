const express = require('express')
const router = express.Router()

const services = require('../services/productRender');
const controller = require('../controller/productController');
const { verifyTokenAndAdmin } = require('../../middleware/verifyToken');


// //LOGIN
// router.get('/login', services.login)

//ADD USER
router.get('/add-product', services.addProduct)

//GET PRODUCTS
router.get('/get-products', services.getProducts)

// //UPDATE USER
router.get('/update-product', services.updateProduct)


// API
router.post('/api/products', verifyTokenAndAdmin, controller.post);
router.get('/api/products', verifyTokenAndAdmin, controller.get);
router.put('/api/products/:id', verifyTokenAndAdmin, controller.put);
router.delete('/api/products/:id', controller.delete);


module.exports = router