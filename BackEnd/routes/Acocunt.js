const accountController = require('../controllers/Account')
const router = require('express').Router()

router.post('/register',accountController.register)
router.get('/countAccount',accountController.countAccount)
router.post('/login',accountController.Login)
router.put('/addProduct/:_id',accountController.addProductToCart)
router.get('/read/:_id',accountController.readCartOfUser)

module.exports = router