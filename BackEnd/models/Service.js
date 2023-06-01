const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    duration : {
        type : String , 
        default : 0
    },
    price : {
        type : Number ,
        required : true
    },
    status : {
        type : String ,
        default : ''
    }
}, { timestamps: true })

const Service = mongoose.model('Service',serviceSchema)
module.exports = Service