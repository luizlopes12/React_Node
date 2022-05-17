const multer = require('multer')

module.exports = (
    multer({
        storage: multer.diskStorage({
            //Mostrando onde deve ser salvo o arquivo
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