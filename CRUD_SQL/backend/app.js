const express = require('express')
const app = express()
const User = require('./Models/User')
const routes = require('./Routes/router')

app.use(express.json())

app.listen(3001, ()=>{
    console.log('Servidor rodando, porta 3001')
})