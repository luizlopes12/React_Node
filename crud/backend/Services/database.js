const Sequelize = require('sequelize')

const sequelize = new Sequelize('cruds', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})


sequelize.authenticate()
.then(()=>console.log("Banco de dados conectado"))
.catch((err)=>console.log(`Erro na conexão com o banco de dados: [ERROR] ${err}`))

module.exports = {
    Sequelize,
    sequelize,
};