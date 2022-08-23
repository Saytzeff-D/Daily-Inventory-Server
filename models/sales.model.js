const mongoose = require('mongoose')

const salesSchema = mongoose.Schema({
    customerName: String,
    items: Array,
    created: Date
})

const SalesModel = mongoose.model('sales_tbs', salesSchema)
module.exports = SalesModel