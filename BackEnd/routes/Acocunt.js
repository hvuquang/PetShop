const accountController = require('../controllers/Account')
const router = require('express').Router()

router.post('/register',accountController.register)

module.exports = router