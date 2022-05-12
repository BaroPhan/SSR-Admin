const express = require('express')
const router = express.Router()

const services = require('../services/productRender');
const controller = require('../controller/productController');


// //LOGIN
// router.get('/login', services.login)

//ADD USER
router.get('/add-user', services.addUser)

//GET PRODUCTS
router.get('/get-products', services.getProducts)

// //UPDATE USER
router.get('/update-user', services.updateUser)


// API
router.post('/api/users', controller.post);
router.get('/api/users', controller.get);
router.put('/api/users/:id', controller.put);
router.delete('/api/users/:id', controller.delete);


module.exports = router