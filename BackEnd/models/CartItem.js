const mongoose = require('mongoose')

const cartItemSchema = new mongoose.Schema({
    product_id : {
        type : Array, 
        ref : 'Product' ,
    },
    quality : {
        type : Number , 
    }
}, { timestamps: true })

const CartItem = mongoose.model('CartItem',cartItemSchema)
module.exports = CartItem