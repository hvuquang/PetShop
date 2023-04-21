const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    date : {
        type : String , 
        required : true
    },
    account_id : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'Account' ,
        required : true
    }
})

const Order = mongoose.model('Order',orderSchema)
module.exports = Order