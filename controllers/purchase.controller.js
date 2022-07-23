const PurchaseModel = require("../models/purchases.model")

const addPurchases = (req, res)=>{
    let purchase = req.body
    let form = new PurchaseModel(purchase)
    form.save((err)=>{
        if(err){
            throw err
        }else{
            res.json({message: 'Purchase Added Successfully'})
        }
    })
}

module.exports = { addPurchases }