const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const bodyParser = require("body-parser");
const UserRouter = require('./routes/user.route');
const cors = require('cors')

const mongoose = require('mongoose');
const PurchaseRouter = require('./routes/purchase.route');
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors({origin: '*'}))
app.use('/user', UserRouter)
app.use('/purchases', PurchaseRouter)
mongoose.connect(process.env.URI, (err, connection)=>{
    if(err){
        console.log('Database Error')
    }else{
        console.log('Mongoose Database Connected')
    }
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Daily Inventory app listening on port ${port}!`))