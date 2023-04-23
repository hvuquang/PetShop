const petController = require('../controllers/Pet')
const upload = require('../middleware/Upload')
const router = require('express').Router()

router.post('/add' , upload.single('image_url') , petController.addPet)
router.get('/readAllPet' , petController.readAllPet)

module.exports = router