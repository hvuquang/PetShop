const orderController = require('../controllers/Order')
const router = require('express').Router()

router.post('/order',orderController.order)
router.get('/getAllOrder',orderController.getAllOrder)
router.get('/revenueCalculation', orderController.revenueCalculation)

module.exports = router