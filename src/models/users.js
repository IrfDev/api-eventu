const mongoose = require('mongoose')

// Create a complete schema for the user
// Exportamos nuestro módelo de mongoose

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: false
    },
    lastname: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: false
    },
    email: {
        type: String,
        minlength: 5,
        maxlength: 180,
        pattern: /^.+@.+\..+$/,
        required: true
    },
    password: {
        type: String,
        minlength: 10,
        maxlength: 200
    },
    phone: {
        type: Number,
        minlength: 10,
        maxlength: 15
    },
    usertype: {
        type: Number,
        minlength: 01,
        maxlength: 01
    }
})

module.exports = mongoose.model('Users', userSchema)