const Sequelize = require('sequelize')

const connection = new Sequelize('nodeBD','root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize,
    connection
}