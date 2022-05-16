const express = require('express')
const imagesController = require('../controllers/imagesController.js')
const router = express.Router()

router
    .get('/', imagesController.getImages)
    .post('/', imagesController.uploadImage)



module.exports = router