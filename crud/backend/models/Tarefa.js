// importando banco de dados
const db = require('../services/database')
// definindo campos da tabela de tarefas no banco de dados
const Tarefa = db.connection.define('tarefas', {
    title: {
        type: db.Sequelize.STRING,
        required: true
    },
    description: {
        type: db.Sequelize.TEXT
    }
})

// criando tabela (obs: criar tabela apenas uma vez, comentar codigo dps da criação)
// Tarefa.sync({force: true})

// exportando model
module.exports = Tarefa