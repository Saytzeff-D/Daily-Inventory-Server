const mongoose = require('mongoose')

const purchaseSchema = mongoose.Schema({
    stockName: String,
    qty: String,
    qtyType: String,
    wholesalePrice: String,
    unitPrice: String,
    retailPrice: String,
    profit: String
})

const PurchaseModel = mongoose.model('purchase_tbs', purchaseSchema)
module.exports = PurchaseModel