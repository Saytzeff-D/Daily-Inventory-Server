const PurchaseModel = require("../models/purchases.model")

const addPurchases = (req, res)=>{
    let purchase = req.body
    purchase.created  = new Date().toISOString()
    let form = new PurchaseModel(purchase)
    form.save((err)=>{
        if(err){
            res.json({err})
        }else{
            res.json({message: 'Purchase Added Successfully'})
        }
    })
}
const getPurchases = (req, res)=>{
    PurchaseModel.find((err, purchases)=>{
        if (!err) {
            res.json({purchases})
        } else {
        console.log(err)
            res.status(300).json({message: 'Server Error'})
        }
    })
}

module.exports = { addPurchases, getPurchases }