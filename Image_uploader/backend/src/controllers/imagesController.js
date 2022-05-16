const Image = require('../models/Image.js')

class imagesController {

    static getImages = (req, res) =>{
        Image.find()
    }

}