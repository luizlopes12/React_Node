const express = require('express')
const tarefas = require('./tarefaRoutes')


const routes = (app) =>{
    app.route('/').get((req,res)=>{
        res.status(200).send({message: 'Rota inicial'})
    })

    app.use(
        express.json(),
        tarefas
        )
}


module.exports = routes