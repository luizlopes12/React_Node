const multer = require('multer')

module.exports = (
    multer({
        //Mostrando onde deve ser salvo o arquivo
        storage: multer.diskStorage({
            destination: (req, file, callback) =>{
                callback(null, './public/images')
            },
            // Definindo o padrão de nome (dataAtual_nomeDoArquivo)
            filename: (req, file, callback) =>{
                callback(null, Date.now().toString() + '_' + file.originalname)
            }
        })
    })
)