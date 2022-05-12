const express = require('express')
const router = express.Router()

const services = require('../services/categoryRender');
const controller = require('../controller/categoryController');
const { verifyTokenAndAdmin } = require('../../middleware/verifyToken');


// //LOGIN
// router.get('/login', services.login)

//ADD USER
router.get('/add-category', services.addCategory)

//GET PRODUCTS
router.get('/get-categories', services.getCategories)

// //UPDATE USER
router.get('/update-category', services.updateCategory)


// API
router.post('/api/categories', verifyTokenAndAdmin, controller.post);
router.get('/api/categories', verifyTokenAndAdmin, controller.get);
router.put('/api/categories/:id', verifyTokenAndAdmin, controller.put);
router.delete('/api/categories/:id', controller.delete);


module.exports = router