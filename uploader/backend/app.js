const express = require('express')
const app = express()
app.use(express.json())

app.post('/upload-image', async (req, res) =>{
    
})






app.listen(3001, ()=>{
    console.log('servidor rodando, porta 3001')
})