const User = require('../models/users')
const bcrypt = require('../lib/bcrypt')

async function create({ name, email, password, phone, usertype }) {
    const hash = await bcrypt.hash(password)
    return User.create({ name, email, password: hash, phone, usertype })
}

function getAll() {
    return User.find()
}

function getById(id) {
    return User.findByID(id)
}

function deleteById(id) {
    return User.findByIdAndDelete(id)
}

module.exports = {
    create,
    getAll,
    getById,
    deleteById
}