const orderModel = require('../models/Order')
const orderDetailModel = require('../models/Order_Detail')

const orderController = {
    order : async(req, res)=>{
        const newOrder = new orderModel({
            date : req.body.date,
            account_id : req.body.account_id
        })
        const newOrderDetail = new orderDetailModel({
            product_id : req.body.product_id,
            subtotal : req.body.subtotal,
            order_id : newOrder._id
        })
        try {
            await newOrder.save()
            await newOrderDetail.save()
            res.status(200).json({newOrder,newOrderDetail})
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getAllOrder : async(req,res)=>{
        try {
            const allOrder = await orderDetailModel.find().populate('order_id').populate('product_id')
            res.status(200).json(allOrder)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = orderController