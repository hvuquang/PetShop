const mongoose = require('mongoose')

const accessorySchema = new mongoose.Schema({
    size_id : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'Size',
        required : true
    },
    color_id : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'Color' ,
        required : true
    },
    price : {
        type : mongoose.Schema.Types.Number,
        required : true
    }
},{timestamps : true})

const Accessory = mongoose.model('Accessory',accessorySchema)
module.exports = Accessory