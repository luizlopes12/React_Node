const multer = require('multer')

module.exports = (
    multer({
        storage: multer.diskStorage({
            // Definindo o padrão de nome (dataAtual_nomeDoArquivo)
            filename: (req, file, callback) =>{
                callback(null, Date.now().toString() + '_' + file.originalname)
            }
        })
    })
)