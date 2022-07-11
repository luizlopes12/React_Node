const express = require('express')
const multer = require('multer')
const cors = require('cors')
const { storage } = require('./multerConfig')

const upload = multer({storage: storage})


const app = express()
app.use(cors())
app.use('/files', express.static('uploads'))
app.post('/upload', upload.single('file'), (req, res)=>{
    res.json(req.file?.filename)
})
app.listen(3001, ()=>{
    console.log('Servidor rodando, porta 3001')
})