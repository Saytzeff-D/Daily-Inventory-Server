const StockKeeperModel = require('../models/stockkeeper.model')

const registerStockKeeper = (req, res)=>{
    let form = new StockKeeperModel(req.body)
    form.save((err)=>{
        if(err) throw err
        res.json({message: 'Registration Successful'})
    })
}

let UserController = { registerStockKeeper }
module.exports = UserController