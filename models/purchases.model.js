const mongoose = require('mongoose')

const purchaseSchema = mongoose.Schema({
    commodityName: {required: [ true, 'Stock Name is required' ], type: String},
    qty: {required: [ true, 'Quantity is required' ], type: String},
    qtyType: {required: [ true, 'Quantity Type is required' ], type: String},
    wholesalePrice: {required: [ true, 'WholeSale Price is required' ], type: String},
    unitPrice: {required: [ true, 'Unit Price is required' ], type: String},
    retailPrice: {required: [ true, 'Retail Price is required' ], type: String},
    profit: {required: [ true, 'Profit Is required' ], type: String},
    created: Date
})

const PurchaseModel = mongoose.model('purchase_tbs', purchaseSchema)
module.exports = PurchaseModel