// Importando a classe do sequelize
const Sequelize = require("sequelize");
// Instanciando a classe com nome do banco, usuario, senha, localização do host e tipo de banco
const sequelize = new Sequelize("testes_node", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});
//Conectando com o banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado com o banco de dados");
  })
  .catch((err) => {
    console.log(`Erro ao conectar com o banco de dados: ${err}`);
  });

  // exportando a classe e a conexão com o banco
  module.exports = { Sequelize, sequelize }
