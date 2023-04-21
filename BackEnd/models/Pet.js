const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
    price : {
        type : Nmuber , 
        required : true
    },
    breed : {
        type : String ,
        required : true
    },
    age : {
        type : Number ,
        required : true
    },
    gender : {
        type : String ,
        required : true
    }
}, { timestamps: true })

const Pet = mongoose.Model('Pet',petSchema)
module.exports = Pet