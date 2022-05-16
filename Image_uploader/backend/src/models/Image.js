const db = require('../config/database.js')

const Image = db.connection.define('images',{
    url: {
        type: db.Sequelize.STRING
    }
})

// Image.sync({force: true})

module.exports = Image