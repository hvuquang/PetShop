const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    duration : {
        type : String , 
        // default : 0
        required : true
    },
    price : {
        type : Number ,
        required : true
    },
    status : {
        type : String ,
        // default : ''
        required : true
    },
    startTime: {
        type: String,
        required : true
    },
    endTime: {
        type: String,
        required: true
    },
    numPets: {
        type: Number,
        required: true
    },
    customerAddress: {
        type: String,
        required: true
    },

}, { timestamps: true })

const Service = mongoose.model('Service',serviceSchema)
module.exports = Service