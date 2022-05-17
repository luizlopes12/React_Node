const Image = require("../models/Image.js");

class imagesController {
  static getImage = (req, res) => {
      let imageName = req.params.imageName
      if(imageName){
          res.status(200).json(imageName)
      }
  };

  static uploadImage = (req, res) => {
      console.log(req.file)
    if (req.file) {
      // Colocando o nome da imagem no banco de dados
      Image.create({
        imageName: req.file.filename,
      })
        // Selecionando a ultima imagem que foi adicionada no banco
        .then(() => {
          Image.findOne({
            order: [["createdAt", "DESC"]],
          })
            // Retornando o nome da imagem salva no banco
            .then((result) => {
              let imageName = result.dataValues.imageName;
              res
                .status(200)
                .json({ message: "Upload realizado com sucesso", imageName });
            });
        })
        .catch(() => {
          res
            .status(500)
            .json({ message: "Não foi possível realizar o upload" });
        });
    } else {
      res
        .status(400)
        .json({ message: "Nenhuma imagem encontrada na requisição" });
    }
  };
}

module.exports = imagesController;
