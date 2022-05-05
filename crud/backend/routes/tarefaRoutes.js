// importando express
const express = require('express')
// importando controller de tarefas
const tarefaController = require('../controllers/tarefaController')
// instanciando a função router do express
const router = express.Router()
// definindo rotas e metodos http
router
    .get('/tarefas', tarefaController.listarTarefa)
    .get('/tarefas/:id', tarefaController.listarTarefaPorId)
    .post('/tarefas', tarefaController.criarTarefa)
    .put('/tarefas/:id', tarefaController.atualizarTarefa)
    .delete('/tarefas/:id', tarefaController.excluirTarefa)

// exportando rotas
module.exports = router