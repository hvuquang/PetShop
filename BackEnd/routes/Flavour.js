const flavourController = require('../controllers/Flavour')
const router = require('express').Router()

router.post('/add',flavourController.addFlavour)
router.get('/read',flavourController.readFlavour)

module.exports = router