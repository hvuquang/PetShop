const flavourModel = require('../models/Flavour')

const flavourController = {
    addFlavour : async(req , res)=>{
        const newFlavour = new flavourModel(req.body)
        try {
            await newFlavour.save()
            res.status(200).json(newFlavour)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    readFlavour : async(req , res) =>{
        try {
            const allFlavour = await flavourModel.find()
            res.status(200).json(allFlavour)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = flavourController