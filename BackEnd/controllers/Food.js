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
    },
    addFoodWithSizeMedium : async(req , res) =>{
        if (req.body.flavour === 'Dâu') {
            try {
                const newFood = new foodModel({
                    flavour_id: "6443692f5d98ed39ac6feab1",
                    size_id: "64436d75b9ba20189b4f0f3a",
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
        else if (req.body.flavour === 'Vani') {
            try {
                const newFood = new foodModel({
                    flavour_id: "644369435d98ed39ac6feab3",
                    size_id: "64436d75b9ba20189b4f0f3a",
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
        else if (req.body.flavour === 'Sôcôla') {
            try {
                const newFood = new foodModel({
                    flavour_id: "6443696e5d98ed39ac6feab5",
                    size_id: "64436d75b9ba20189b4f0f3a",
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
    },
    addFoodWithSizeLarge : async(req , res) =>{
        if (req.body.flavour === 'Dâu') {
            try {
                const newFood = new foodModel({
                    flavour_id: "6443692f5d98ed39ac6feab1",
                    size_id: "64436d7bb9ba20189b4f0f3c",
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
        else if (req.body.flavour === 'Vani') {
            try {
                const newFood = new foodModel({
                    flavour_id: "644369435d98ed39ac6feab3",
                    size_id: "64436d7bb9ba20189b4f0f3c",
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
        else if (req.body.flavour === 'Sôcôla') {
            try {
                const newFood = new foodModel({
                    flavour_id: "6443696e5d98ed39ac6feab5",
                    size_id: "64436d7bb9ba20189b4f0f3c",
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
    },
    readAllFood : async(req , res) =>{
        try {
            // const allProduct = await productModel.find()
            // const allFood = await foodModel.find()
            // let allFoods = []
            // allProduct.map((product)=>{
            //     allFood.map((food)=>{
            //         if(product.id === food._id){
            //             let f = {
            //                 _id: product._id,
            //                 name: product.name,
            //                 description: product.description,
            //                 id: product.id,
            //                 price: food.price,
            //                 product_type: product.product_type,
            //                 image_url: product.image_url
            //             }
            //             allFoods.push(f)
            //         }
            //     })
            // })
            const allProduct = await productModel.aggregate([
                {
                    $lookup: {
                        from: "foods", // Tên của bảng "food"
                        localField: "id", // Trường "id" trong bảng "product"
                        foreignField: "_id", // Trường "id" trong bảng "food"
                        as: "foodData" // Tên gán cho kết quả nối là "foodData"
                    }
                }
            ]);
            res.status(200).json(allProduct)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = foodController
