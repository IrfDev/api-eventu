const mongoose = require('mongoose')
const 
// Process es una variabe global en node.js guarda toda la información de un proceso. 
//Accedemos a las variables globales. 
const {
    DB_USER,
    DB_HOST,
    DB_NAME,
    DB_PASSWORD
} = process.env

// Agregamos la uri que viene en mongodb 
const uri = `mongodb+srv://irving:1234@kodemia-xbiou.mongodb.net/blog?retryWrites=true&w=majority`

module.exports = () => mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})