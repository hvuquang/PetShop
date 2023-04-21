const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true
    },
    description : {
        type : String ,
        required : true
    },
    id : {
        type : mongoose.Schema.Types.ObjectId ,
        required : true
    },
    product_type : {
        type : String ,
        required : true
    },
    image_url : {
        type : String , 
        required : true
    }
})

const Product = mongoose.model('Product',productSchema)
module.exports = Product