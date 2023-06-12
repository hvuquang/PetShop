const serviceModel = require('../models/Service')
const productModel = require('../models/Product')

const serviceController = {
    addService :  async(req , res)=>{
        try {
            const newService = new serviceModel({
                price : req.body.price
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
    }
}

module.exports = serviceController