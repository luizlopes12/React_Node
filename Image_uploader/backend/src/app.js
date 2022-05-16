const express = require('express')
const router = require('./routes')
const cors = require('cors')
const app = express()
const port = 3001
app.use(express.json())
app.use(cors())
router(app)






app.listen(port, ()=>{
    console.log(`Servidor rodando, porta ${port}`)
})