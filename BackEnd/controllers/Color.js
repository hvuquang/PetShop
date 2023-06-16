const colorModel = require('../models/Color')

const colorController = {
    addColor: async (req, res) => {
        const newColor = new colorModel(req.body)
        try {
            await newColor.save()
            res.status(200).json(newColor)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    readColor: async (req, res) => {
        try {
            const allColor = await colorModel.find()
            res.status(200).json(allColor)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = colorController