const mongoose = require('mongoose')
const StockKeeperSchema = {
    fullName: String,
    email: String,
    phone: String,
    pword: String
}

const StockKeeperModel = mongoose.model('stockKeeper_tbs', StockKeeperSchema)
module.exports = StockKeeperModel