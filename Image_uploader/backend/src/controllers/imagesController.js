const Image = require("../models/Image.js");

class imagesController {
  static uploadImage = (req, res) => {
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
                .json({ message: "Upload realizado com sucesso", imageUrl: `/files/${imageName}`});
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
