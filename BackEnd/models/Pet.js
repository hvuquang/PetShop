const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
    price : {
        type : Number , 
        required : true
    },
    breed : {
        type : String ,
        required : true
    },
    age : {
        type : String ,
        required : true
    },
    gender : {
        type : String ,
        required : true
    }
}, { timestamps: true })

const Pet = mongoose.model('Pet',petSchema)
module.exports = Pet