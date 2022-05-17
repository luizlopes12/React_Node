const express = require('express')
const imagesController = require('../controllers/imagesController.js')
const upload = require('../middlewares/uploadImage.js')
const router = express.Router()

router
    .get('/', imagesController.getImages)
    .post('/', upload.single('image'), imagesController.uploadImage)



module.exports = router