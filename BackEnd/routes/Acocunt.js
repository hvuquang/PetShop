const accountController = require('../controllers/Account')
const router = require('express').Router()

router.post('/register',accountController.register)
router.get('/countAccount',accountController.countAccount)
router.post('/login',accountController.Login)
router.put('/readAccount/:_id',accountController.addProductToCart)

module.exports = router