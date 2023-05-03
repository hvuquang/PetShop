const accountController = require('../controllers/Account')
const router = require('express').Router()

router.post('/register',accountController.register)
router.get('/countAccount',accountController.countAccount)
router.post('/login',accountController.Login)
router.put('/addProduct/:_id',accountController.addProductToCart)
router.get('/cartContainFood/:_id',accountController.cartContainFood)
router.get('/cartContainPet/:_id', accountController.cartContainPet)

module.exports = router