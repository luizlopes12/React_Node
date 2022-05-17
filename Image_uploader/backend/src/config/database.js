const Sequelize = require('sequelize')

const connection = new Sequelize('nodeBD','root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})
connection.authenticate()
.then(()=>{
    console.log('Banco de dados conectado')
})
.catch((err)=>{
    console.log(`Erro ao conectar com o banco de dados: [ERROR]: ${err}`)
})

module.exports = {
    Sequelize,
    connection
}