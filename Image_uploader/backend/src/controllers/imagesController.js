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

    static uploadImage = async (req, res) =>{
        if(req.file){
            res.status(200).json({message: 'Upload realizado com sucesso'})
        }
        else{
            res.status(500).json({message: 'Não foi possível realizar o upload'})
        }
    }
}


module.exports = imagesController