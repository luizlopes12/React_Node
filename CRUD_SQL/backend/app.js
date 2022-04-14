const express = require('express')
const app = express()
const User = require('./models/User')
const routes = require('./routes/router')

app.use(express.json())

app.listen(3001, ()=>{
    console.log('Servidor rodando, porta 3001')
})