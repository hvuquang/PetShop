const foodController = require('../controllers/Food')
const router = require('express').Router()
const upload = require('../middleware/Upload')

router.post('/addSizeSmall', upload.single('image_url'),foodController.addFoodWithSizeSmall)

module.exports = router