const foodModel = require('../models/Food')
const productModel = require('../models/Product')
const path = require('path')

const foodController = {
    addFoodWithSizeSmall : async(req , res) =>{
        if (req.body.flavour === 'Dâu') {
            try {
                const newFood = new foodModel({
                    flavour_id: "6443692f5d98ed39ac6feab1",
                    size_id: "64436d6cb9ba20189b4f0f38",
                    price: req.body.price
                })
                const newProduct = new productModel({
                    name: req.body.name,
                    description: req.body.description,
                    id: newFood._id,
                    product_type: req.body.product_type,
                })
                if (req.file) {
                    newProduct.image_url = req.file.path
                }
                await newFood.save()
                await newProduct.save()
                res.status(200).json(newProduct)
            } catch (error) {
                res.status(500).json(error)
            }
        }
        else if (req.body.flavour === 'Vani'){
            try {
                const newFood = new foodModel({
                    flavour_id: "644369435d98ed39ac6feab3",
                    size_id: "64436d6cb9ba20189b4f0f38",
                    price: req.body.price
                })
                const newProduct = new productModel({
                    name: req.body.name,
                    description: req.body.description,
                    id: newFood._id,
                    product_type: req.body.product_type,
                })
                if (req.file) {
                    newProduct.image_url = req.file.path
                }
                await newFood.save()
                await newProduct.save()
                res.status(200).json(newProduct)
            } catch (error) {
                res.status(500).json(error)
            }
        }
        else if (req.body.flavour === 'Sôcôla'){
            try {
                const newFood = new foodModel({
                    flavour_id: "6443696e5d98ed39ac6feab5",
                    size_id: "64436d6cb9ba20189b4f0f38",
                    price: req.body.price
                })
                const newProduct = new productModel({
                    name: req.body.name,
                    description: req.body.description,
                    id: newFood._id,
                    product_type: req.body.product_type,
                })
                if (req.file) {
                    newProduct.image_url = req.file.path
                }
                await newFood.save()
                await newProduct.save()
                res.status(200).json(newProduct)
            } catch (error) {
                res.status(500).json(error)
            }
        }
    }
}

module.exports = foodController

module.exports = foodController