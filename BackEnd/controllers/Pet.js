const productModel = require('../models/Product')
const petModel = require('../models/Pet')

const petController = {
    addPet : async(req , res) =>{
        try {
            const newpet = new petModel({
                price : req.body.price , 
                breed : req.body.breed ,
                age : req.body.age ,
                gender : req.body.gender
            })
            const newproduct = new productModel({
                name: req.body.name,
                description: req.body.description,
                id: newpet._id,
                product_type: req.body.product_type,
            })
            if(req.file){
                newproduct.image_url = req.file.path
            }
            await newpet.save()
            await newproduct.save()
            res.status(200).json(newproduct)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    readAllPet : async(req , res) =>{
        try {
            const allPet = await productModel.aggregate([
                {
                    $lookup: {
                        from: 'pets',
                        localField: 'id',
                        foreignField: '_id',
                        as: 'petData'
                    }
                },
                {
                    $unwind : '$petData'
                }
            ])
            res.status(200).json(allPet)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = petController