// importando express
const express = require('express')
// importando cors
const cors = require('cors')
// importando rotas
const routes = require('./routes')
// instanciando express
const app = express()
// utilizando rotas
routes(app)
// middlewares (aceitando json e habilitando o cors) 
app.use(express.json())
app.use(cors())
// definindo porta  
const port = 3001
// iniciando servidor
app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})