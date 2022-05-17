const images = require('./imagesRoutes.js')
const routes = (app) =>{
    app.use(images)
}
module.exports = routes