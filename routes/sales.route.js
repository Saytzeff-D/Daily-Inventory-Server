const express = require('express')
const { addSales } = require('../controllers/sales.controller')
const SalesRouter = express.Router()

SalesRouter.post('/addSales', addSales)

module.exports = SalesRouter