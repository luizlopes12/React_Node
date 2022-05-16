const express = require('express')
const images = require('./imagesRoutes.js')
const router = (app) =>{
    app.use(
        images
    )
}

module.exports = router