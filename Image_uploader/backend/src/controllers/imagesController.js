const Image = require('../models/Image.js')

class imagesController {

    static getImages = (req, res) =>{
        Image.findAll()
        .then((images)=>{
            res.status(200).json(images)
        })
        .catch((err)=>{
            res.status(500).json(err.message)
        })
    }

    static uploadImage = (req, res) =>{
        res.status(200).json({message: 'deu bom'})
    }
}


module.exports = imagesController