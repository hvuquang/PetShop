const colorController = require('../controllers/Color')
const router = require('express').Router()

router.post('/add', colorController.addColor)
router.get('/read', colorController.readColor)

module.exports = router