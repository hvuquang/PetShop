const accountController = require('../controllers/Account')
const router = require('express').Router()

router.post('/register',accountController.register)
router.get('/countAccount',accountController.countAccount)

module.exports = router