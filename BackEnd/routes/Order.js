const orderController = require('../controllers/Order')
const router = require('express').Router()

router.post('/order',orderController.order)
router.get('/getAllOrder',orderController.getAllOrder)

module.exports = router