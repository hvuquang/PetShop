const serviceController = require('../controllers/Service')
const router = require('express').Router()
const upload = require('../middleware/Upload')

router.post('/add', upload.single('image_url'), serviceController.addService)
router.get('/readAllService',serviceController.readAllService)
router.get('/readService/:_id', serviceController.readService)
router.delete('/deleteService/:_id', serviceController.deleteService)
router.put('/updateService/:_id', serviceController.updateService)
router.get('/countService', serviceController.countService)

module.exports = router