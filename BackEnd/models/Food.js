const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    flavour_id : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : 'Flavour' ,
        required : true
    },
    size_id : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : 'Size',
        required : true
    },
    price : {
        type : Number , 
        required : true
    }
})

const Food = mongoose.model('Food',foodSchema)
module.exports = Food