const express = require('express')
const usersRouters = require('./routers/users')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/users', usersRouters)

app.get('/', (req, res) => {
    res.json({
        "message": 'Hello world'
    })
})

module.exports = app