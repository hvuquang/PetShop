const accountModel = require('../models/Account')
const cartModel = require('../models/CartItem')

const accountController = {
    register : async(req , res) =>{
        try {
            const newCart = new cartModel()
            const newAccount = new accountModel({
                fullname: req.body.fullname,
                email: req.body.email,
                phone_number: req.body.phone_number,
                username: req.body.username,
                password: req.body.password,
                cart_id: newCart._id,
                address: req.body.address
            })
            await newCart.save()
            await newAccount.save()
            res.status(200).json(newAccount)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    Login : async(req , res) =>{
        const account = await accountModel.findOne({
            username : req.body.username
        })
        if(account.password === req.body.password){
            res.status(200).json(account)
        }
        else
            res.status(500).json('Đăng nhập thất bại')
    },
    countAccount : async(req , res) =>{
        try {
            const countAccount =await accountModel.find().count()
            res.status(200).json(countAccount)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = accountController