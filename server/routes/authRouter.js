const express = require('express')
const router = express.Router()

const services = require('../services/render');
const controller = require('../controller/authController');


//LOGIN
router.get('/login', services.login)

//API
router.post('/api/login', controller.login);

module.exports = router