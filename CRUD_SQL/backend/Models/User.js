const db = require('./db')
// criando a tabela users no banco de dados
const User = db.sequelize.define('users', {
    name: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    password: {
        type: db.Sequelize.STRING
    }
})

// User.sync({force: true})

module.exports = { User }