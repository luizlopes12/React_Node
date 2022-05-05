const db = require('../services/database')

const Tarefa = db.connection.define('tarefas', {
    title: {
        type: db.Sequelize.STRING,
        required: true
    },
    description: {
        type: db.Sequelize.TEXT
    }
})

// Tarefa.sync({force: true})

module.exports = Tarefa