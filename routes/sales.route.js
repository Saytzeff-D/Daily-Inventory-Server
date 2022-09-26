const express = require('express')
const { addSales, fetchSales } = require('../controllers/sales.controller')
const SalesRouter = express.Router()

SalesRouter.post('/addSales', addSales)
SalesRouter.get('/allSales', fetchSales )

module.exports = SalesRouter