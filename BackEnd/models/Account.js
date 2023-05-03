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
        type : String , 
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
    cart_id : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'CartItem' , 
        required : true
    },
    address : {
        type : String , 
        required : true
    },
    admin : {
        type : Boolean ,
        default : false
    }
},{ timestamps: true })

const Account = mongoose.model('Account',accountSchema)
module.exports = Account