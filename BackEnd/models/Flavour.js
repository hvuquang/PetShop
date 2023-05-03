const mongoose = require('mongoose')

const flavourSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : true
    }
}, { timestamps: true })

const Flavour = mongoose.model('Flavour',flavourSchema)
module.exports = Flavour