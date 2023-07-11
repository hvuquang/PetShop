const productModel = require('../models/Product')
const accessoryModel = require('../models/Accessory')

const accessoryController = {
    addAccessoryWithSizeS : async(req,res)=>{
        try {
            const newAccessory = new accessoryModel({
                color_id: req.body.color_id,
                size_id: "64436d6cb9ba20189b4f0f38",
                price: req.body.price
            })
            const newProduct = new productModel({
                name: req.body.name,
                description: req.body.description,
                id: newAccessory._id,
                product_type: req.body.product_type,
            })
            if (req.file) {
                newProduct.image_url = req.file.path
            }
            await newAccessory.save()
            await newProduct.save()
            res.status(200).json(newProduct)
        } catch (error) {
            res.status(200).json(error)
        }
    },
    addAccessoryWithSizeM: async (req, res) => {
        try {
            const newAccessory = new accessoryModel({
                color_id: req.body.color_id,
                size_id: "64436d75b9ba20189b4f0f3a",
                price: req.body.price
            })
            const newProduct = new productModel({
                name: req.body.name,
                description: req.body.description,
                id: newAccessory._id,
                product_type: req.body.product_type,
            })
            if (req.file) {
                newProduct.image_url = req.file.path
            }
            await newAccessory.save()
            await newProduct.save()
            res.status(200).json(newProduct)
        } catch (error) {
            res.status(200).json(error)
        }
    },
    addAccessoryWithSizeL: async (req, res) => {
        try {
            const newAccessory = new accessoryModel({
                color_id: req.body.color_id,
                size_id: "64436d7bb9ba20189b4f0f3c",
                price: req.body.price
            })
            const newProduct = new productModel({
                name: req.body.name,
                description: req.body.description,
                id: newAccessory._id,
                product_type: req.body.product_type,
            })
            if (req.file) {
                newProduct.image_url = req.file.path
            }
            await newAccessory.save()
            await newProduct.save()
            res.status(200).json(newProduct)
        } catch (error) {
            res.status(200).json(error)
        }
    },
    readAllAccessory: async (req, res) => {
        try {
            const allProduct = await productModel.aggregate([
                {
                    $lookup: {
                        from: "accessories",
                        localField: "id",
                        foreignField: "_id",
                        as: "accessoryData"
                    }
                },
                {
                    $lookup: {
                        from: "colors",
                        localField: "accessoryData.color_id",
                        foreignField: "_id",
                        as: "colorData"
                    }
                },
                {
                    $lookup: {
                        from: "sizes",
                        localField: "accessoryData.size_id",
                        foreignField: "_id",
                        as: "sizeData"
                    }
                },
                {
                    $unwind: '$accessoryData'
                }
            ]);
            res.status(200).json(allProduct)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    countAccessory: async (req, res) => {
        try {
            const countAccessory = await productModel.find({product_type : "Accessory"}).count()
            res.status(200).json(countAccessory)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    readAccessory: async (req, res) => {
        try {
            const _idProduct = req.params._id;
            const product = await productModel.findById(_idProduct).lean()
            const _idAccessory = product.id
            const accessory = await accessoryModel.findById(_idAccessory).populate([
                { path: 'color_id', model: 'Color' },
                { path: 'size_id', model: 'Size' }
            ]).lean()
            const accessoryData = {
                Product: product,
                accessory: accessory
            }
            res.status(200).json(accessoryData);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteAccessory: async (req, res) => {
        try {
            const id = req.params._id
            const product = await productModel.findById(id)
            const _idAccessory = product.id
            await accessoryModel.findByIdAndDelete(_idAccessory)
            await productModel.findByIdAndDelete(id)
            res.status(200).json("Xóa thành công")
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateAccessory: async (req, res) => {
        try {
            const productId = req.params._id;
            const product = await productModel.findById(productId)
            const AccessoryId = product.id
            const updatedAccessoryData = req.body.accessory;
            const updatedProductData = req.body.product;
            const updatedProduct = await productModel.findByIdAndUpdate(
                productId,
                updatedProductData,
                { new: true, runValidators: true }
            );
            const updatedAccessory = await accessoryModel.findByIdAndUpdate(
                AccessoryId,
                updatedAccessoryData,
                { new: true, runValidators: true }
            );
            if (!updatedProduct || !updatedAccessory) {
                return res.status(404).json({ error: "Product hoặc Accessory không tồn tại" });
            }

            res.status(200).json({ updatedProduct, updatedAccessory });
        } catch (error) {
            res.status(500).json(error);
        }
    },
    searchAccessory: async (req, res) => {
        const nameAccessory = req.body.nameAccessory
        try {
            const regexPattern = new RegExp(nameAccessory, 'i')
            const accessoriess = await productModel.find({ name: { $regex: regexPattern }, product_type: 'Accessory' })
            const accessoriesIds = accessoriess.map(accessory => accessory._id)
            const infoFoods = await productModel.aggregate([
                {
                    $match: {
                        _id: {
                            $in: accessoriesIds
                        }
                    }
                },
                {
                    $lookup: {
                        from: "accessories",
                        localField: "id",
                        foreignField: "_id",
                        as: "accessoryData"
                    }
                },
                {
                    $lookup: {
                        from: "colors",
                        localField: "accessoryData.color_id",
                        foreignField: "_id",
                        as: "colorData"
                    }
                },
                {
                    $lookup: {
                        from: "sizes",
                        localField: "accessoryData.size_id",
                        foreignField: "_id",
                        as: "sizeData"
                    }
                },
                
            ])
            res.status(200).json(infoFoods)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = accessoryController