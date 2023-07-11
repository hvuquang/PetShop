const mongoose = require('mongoose')

const orderDetailSchema = new mongoose.Schema({
    product_id : [{
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'Product' , 
        required : true
    }],
    subtotal : {
        type : Number , 
        required : true
    },
    order_id : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'Order' , 
        required : true
    }
}, { timestamps: true })

const Order_Detail = mongoose.model('Order_Detail',orderDetailSchema)
module.exports = Order_Detail