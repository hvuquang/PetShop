const serviceModel = require('../models/Service')
const productModel = require('../models/Product')

const serviceController = {
    addService :  async(req , res)=>{
        try {
            const newService = new serviceModel({
                price : req.body.price,
                startTime : req.body.startTime,
                endTime : req.body.endTime,
                numPets : req.body.numPets,
                customerAddress : req.body.customerAddress
            })
            const newProduct = new productModel({
                name: req.body.name,
                description: req.body.description,
                id: newService._id,
                product_type: req.body.product_type,
            })
            if(req.file){
                newProduct.image_url = req.file.path
            }
            await newService.save()
            await newProduct.save()
            res.status(200).json(newProduct)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    readAllService : async(req,res) => {
        try {
            const allService = await productModel.aggregate([
                {
                    $lookup : {
                        from : 'services',
                        localField : 'id',
                        foreignField : '_id',
                        as : 'serviceData'
                    }
                },
                {
                    $unwind : '$serviceData'
                }
            ])
            res.status(200).json(allService)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    readService : async(req,res)=>{
        try {
            const id = req.params._id
            const product = await productModel.findById(id).lean()
            const serviceId = product.id
            const service = await serviceModel.findById(serviceId).lean()
            res.status(200).json({ product, service })
        } catch (error) {
            res.status(500).json(error)
        }
    },
    deleteService: async (req, res) => {
        try {
            const id = req.params._id
            const product = await productModel.findById(id)
            const serviceId = product.id
            await petModel.findByIdAndDelete(serviceId)
            await productModel.findByIdAndDelete(id)
            res.status(200).json("Xóa thành công")
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateService: async (req, res) => {
        try {
            const productId = req.params._id;
            const product = await productModel.findById(productId)
            const serviceId = product.id
            const updatedServiceData = req.body.service;
            const updatedProductData = req.body.product;
            const updatedProduct = await productModel.findByIdAndUpdate(
                productId,
                updatedProductData,
                { new: true, runValidators: true }
            );
            const updatedService = await serviceModel.findByIdAndUpdate(
                serviceId,
                updatedServiceData,
                { new: true, runValidators: true }
            );
            if (!updatedProduct || !updatedService) {
                return res.status(404).json({ error: "Product hoặc Service không tồn tại" });
            }

            res.status(200).json({ updatedProduct, updatedService });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = serviceController