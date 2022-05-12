const express = require('express')
const router = express.Router()

const services = require('../services/render');

//HOME ROUTE
router.get('/', services.home);

module.exports = router