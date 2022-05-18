const express = require('express')
const router = require('./routes')
const cors = require('cors')
const path = require('path')
const app = express()
const port = 3001
app.use(express.json())
app.use(cors())
//Permitindo que o usuario acesse a imagem pela url
app.use('/files', express.static(path.resolve(__dirname,'../public/images')))
router(app)


app.listen(port, ()=>{
    console.log(`Servidor rodando, porta ${port}`)
})