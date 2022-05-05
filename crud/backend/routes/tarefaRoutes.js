const express = require('express')
const tarefaController = require('../controllers/tarefaController')
const router = express.Router()


router
    .get('/tarefas', tarefaController.listarTarefa)
    .get('/tarefas/:id', tarefaController.listarTarefaPorId)
    .post('/tarefas', tarefaController.criarTarefa)
    .put('/tarefas/:id', tarefaController.atualizarTarefa)
    .delete('/tarefas/:id', tarefaController.excluirTarefa)


module.exports = router