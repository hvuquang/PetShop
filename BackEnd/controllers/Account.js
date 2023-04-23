const mongoose = require('mongoose')
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
    },
    addProductToCart : async(req , res) =>{
        try {
            const id = req.params._id
            // const account = await accountModel.aggregate([
            //     {
            //         $match : {
            //             _id : id
            //         }
            //     },
            //     {
            //         $lookup: {
            //             from: 'cartitems',
            //             localField: 'cart_id',
            //             foreignField: '_id',
            //             as: 'cartData'
            //         }
            //     }
            // ])
            const account = await accountModel.findById(id).populate('cart_id')
            account.cart_id.product_id.push(req.body.product)
            await account.save()
            res.status(200).json(account)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = accountController