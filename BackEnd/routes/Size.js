const sizeController = require('../controllers/Size')
const router = require('express').Router()

router.post('/add', sizeController.addSize)
router.get('/read', sizeController.readAllSize)

module.exports = router