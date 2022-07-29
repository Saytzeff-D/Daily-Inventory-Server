const express = require('express')
const { addPurchases, getPurchases } = require('../controllers/purchase.controller')
const PurchaseRouter = express.Router()

PurchaseRouter.post('/addPurchase', addPurchases)
PurchaseRouter.get('/getPurchase', getPurchases)

module.exports = PurchaseRouter