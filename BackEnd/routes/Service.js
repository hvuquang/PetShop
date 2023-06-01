const serviceController = require('../controllers/Service')
const router = require('express').Router()
const upload = require('../middleware/Upload')

router.post('/add', upload.single('image_url'), serviceController.addService)
router.get('/read',serviceController.readAllService)

module.exports = router