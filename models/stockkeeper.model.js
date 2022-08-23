const mongoose = require('mongoose')
const StockKeeperSchema = mongoose.Schema({
    fullName: String,
    email: String,
    phone: String,
    pword: String
})

const StockKeeperModel = mongoose.model('stockKeeper_tbs', StockKeeperSchema)
module.exports = StockKeeperModel