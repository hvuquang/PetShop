const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    fullname : {
        type : String , 
        required : true
    },
    email : {
        type : String , 
        required : true
    },
    phone_number : {
        type : Number , 
        required : true
    },
    username : {
        type : String , 
        required : true
    },
    password : {
        type : String ,
        required : true
    },
    card_id : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'CartItem' , 
        required : true
    },
    address : {
        type : String , 
        required : true
    }
})

const Account = mongoose.model('Account',accountSchema)
module.exports = Account