const { default: mongoose } = require('mongoose')
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
            const allProduct = await productModel.aggregate([
                {
                    $lookup: {
                        from: "foods", 
                        localField: "id", 
                        foreignField: "_id", 
                        as: "foodData" 
                    }
                } , 
                {
                    $lookup : {
                        from : "flavours" ,
                        localField : "foodData.flavour_id" ,
                        foreignField : "_id" ,
                        as : "flavourData"
                    }
                },
                {
                    $lookup: {
                        from: "sizes",
                        localField: "foodData.size_id",
                        foreignField: "_id",
                        as: "sizeData"
                    }
                },
                {
                    $unwind : '$foodData'
                }
            ]);
            res.status(200).json(allProduct)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    countFood : async(req , res) =>{
        try {
            const countFood = await productModel.find({product_type : "Food"}).count()
            res.status(200).json(countFood)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    readFood: async (req, res) => {
        try {
            const _idProduct = req.params._id;
            const product = await productModel.findById(_idProduct).lean()
            const _idPet = product.id
            const food = await foodModel.findById(_idPet).populate([
                { path: 'flavour_id', model: 'Flavour' },
                { path: 'size_id', model: 'Size' }
            ]).lean()
            const foodData = {
                Product: product,
                Food : food
            }
            res.status(200).json(foodData);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteFood : async(req,res)=>{
        try {
            const id = req.params._id
            const product = await productModel.findById(id)
            const idFood = product.id
            await foodModel.findByIdAndDelete(idFood)
            await productModel.findByIdAndDelete(id)
            res.status(200).json("Xóa thành công")
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateFood: async (req, res) => {
        try {
            const productId = req.params._id;
            const product = await productModel.findById(productId)
            const foodId = product.id
            const updatedFoodData = req.body.food;
            const updatedProductData = req.body.product;
            const updatedProduct = await productModel.findByIdAndUpdate(
                productId,
                updatedProductData,
                { new: true, runValidators: true }
            );
            const updatedFood = await foodModel.findByIdAndUpdate(
                foodId,
                updatedFoodData,
                { new: true, runValidators: true }
            );
            if (!updatedProduct || !updatedFood) {
                return res.status(404).json({ error: "Product hoặc Food không tồn tại" });
            }

            res.status(200).json({ updatedProduct, updatedFood });
        } catch (error) {
            res.status(500).json(error);
        }
    },
    searchFood: async (req, res) => {
        const nameFood = req.body.nameFood
        try {
            const regexPattern = new RegExp(nameFood, 'i')
            const pets = await productModel.find({ name: { $regex: regexPattern }, product_type: 'Food' })
            const foodIds = pets.map(food => food._id)
            const infoFoods = await productModel.aggregate([
                {
                    $match: {
                        _id: {
                            $in: foodIds
                        }
                    }
                },
                {
                    $lookup: {
                        from: 'foods',
                        localField: 'id',
                        foreignField: '_id',
                        as: 'foodData'
                    }
                },
                {
                    $lookup: {
                        from: "flavours",
                        localField: "foodData.flavour_id",
                        foreignField: "_id",
                        as: "flavourData"
                    }
                },
                {
                    $lookup: {
                        from: "sizes",
                        localField: "foodData.size_id",
                        foreignField: "_id",
                        as: "sizeData"
                    }
                },
                {
                    $unwind: '$foodData'
                }
            ])
            res.status(200).json(infoFoods)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = foodController
