const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const bodyParser = require("body-parser");
const UserRouter = require('./routes/user.route');
const cors = require('cors')

const mongoose = require('mongoose');
const PurchaseRouter = require('./routes/purchase.route');
const SalesRouter = require('./routes/sales.route');
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors({origin: '*'}))
app.use('/user', UserRouter)
app.use('/purchases', PurchaseRouter)
app.use('/sales', SalesRouter)
mongoose.connect(process.env.URI, (err, connection)=>{
    if(err){
        console.log('Mongoose was unable to connect')
    }else{
        console.log('Mongoose Database Connected')
    }
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Stock Inventory Management System now listening on port ${port}`))