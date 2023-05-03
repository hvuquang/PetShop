const sizeModel = require('../models/Size')

const sizeController = {
    addSize : async(req , res) =>{
        const newSize = new sizeModel(req.body)
        try {
            await newSize.save()
            res.status(200).json(newSize)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    readAllSize : async(req , res) =>{
        try {
            const allSize = await sizeModel.find()
            res.status(200).json(allSize)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = sizeController