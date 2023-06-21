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
    },
    aboutBreed: {
        type: String,
        required: true
    },
    characteristic: {
        type: String,
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    color_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Color',
        required: true
    },
}, { timestamps: true })

const Pet = mongoose.model('Pet',petSchema)
module.exports = Pet