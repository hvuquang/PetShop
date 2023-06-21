const petController = require('../controllers/Pet')
const upload = require('../middleware/Upload')
const router = require('express').Router()

router.post('/add' , upload.single('image_url') , petController.addPet)
router.get('/readAllPet' , petController.readAllPet)
router.get('/readPet/:_id', petController.readPet)
router.delete('/deletePet/:_id', petController.deletePet)
router.put('/updatePet/:_id', petController.updatePet)

module.exports = router