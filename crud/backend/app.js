const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001
const routes = require('./routes')
routes(app)
app.use(express.json())
app.use(cors())
app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})