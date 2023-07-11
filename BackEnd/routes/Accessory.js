const accessoryController = require('../controllers/Accessory')
const router = require('express').Router()
const upload = require('../middleware/Upload')

router.post('/addSizeSmall', upload.single('image_url'), accessoryController.addAccessoryWithSizeS)
router.post('/addSizeMedium', upload.single('image_url'), accessoryController.addAccessoryWithSizeM)
router.post('/addSizeLarge', upload.single('image_url'), accessoryController.addAccessoryWithSizeL)
router.get('/readAllAccessory' , accessoryController.readAllAccessory)
router.get('/count', accessoryController.countAccessory)
router.get('/readAccessory/:_id', accessoryController.readAccessory)
router.delete('/deleteAccessory/:_id', accessoryController.deleteAccessory)
router.put('/updateAccessory/:_id', accessoryController.updateAccessory)
router.post('/searchAccessory', accessoryController.searchAccessory)

module.exports = router