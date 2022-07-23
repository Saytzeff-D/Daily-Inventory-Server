const express = require('express')
const { addPurchases } = require('../controllers/purchase.controller')
const PurchaseRouter = express.Router()

PurchaseRouter.post('/addPurchase', addPurchases)

module.exports = PurchaseRouter