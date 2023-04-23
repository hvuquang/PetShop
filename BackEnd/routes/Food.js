const foodController = require('../controllers/Food')
const router = require('express').Router()
const upload = require('../middleware/Upload')

router.post('/addSizeSmall', upload.single('image_url'),foodController.addFoodWithSizeSmall)
router.post('/addSizeMedium', upload.single('image_url'), foodController.addFoodWithSizeMedium)
router.post('/addSizeLarge', upload.single('image_url'), foodController.addFoodWithSizeLarge)
router.get('/readAllFood',foodController.readAllFood)
router.get('/countFood', foodController.countFood)


module.exports = router