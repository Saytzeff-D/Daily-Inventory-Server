const SalesModel = require("../models/sales.model")
const PurchaseModel = require("../models/purchases.model")

const addSales = (req, res)=>{
    const sales = req.body
    sales.created = new Date().toISOString()
    let salesForm = new SalesModel(sales)
    sales.items.map((each)=>{
        PurchaseModel.findOne({ commodityName: each.commodityName }, (err, result)=>{
            if(!err){
                let newQty = parseInt(result.qty) - parseInt(each.qty)
                PurchaseModel.findByIdAndUpdate(result._id, { qty: newQty }, (err)=>{
                    if(!err){
                        console.log(`Done with ${each.commodityName} item`)
                    }else res.send({status:false, message: 'Failed to update Purchase Table'})
                })
            }else res.send({status: false, message: `Cannot find Item ${each.commodityName} in Purchase Table`})
        })
    })
    salesForm.save((err)=>{
        if(!err){
            res.status(200).json({status: true, message: 'Sales Added Successfully'})
        }else{
            res.status(200).json({status: false, message: 'Error occured while trying to add sales'})
        }
    })
}

module.exports = { addSales }