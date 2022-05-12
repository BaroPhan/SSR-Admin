const express = require('express')
const router = express.Router()

const services = require('../services/userRender');
const controller = require('../controller/userController');
const { verifyTokenAndAdmin } = require('../../middleware/verifyToken');


//ADD USER
router.get('/add-user', services.addUser)

//GET USERS
router.get('/get-users', services.getUsers)

// //UPDATE USER
router.get('/update-user', services.updateUser)


// API
router.post('/api/users', verifyTokenAndAdmin, controller.post);
router.get('/api/users', verifyTokenAndAdmin, controller.get);
router.put('/api/users/:id', controller.put);
router.delete('/api/users/:id', controller.delete);


module.exports = router