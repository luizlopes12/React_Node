// importando express
const express = require('express')
// importando rotas das tarefas
const tarefas = require('./tarefaRoutes')
// Função para organizar as rotas
const routes = (app) =>{
// definindo rota inicial da API
    app.route('/').get((req,res)=>{
        res.status(200).send({message: 'Rota inicial'})
    })
// Função para unificar as rotas
    app.use(
        express.json(),
        tarefas
    )
}
// exportando organizador de rotas
module.exports = routes