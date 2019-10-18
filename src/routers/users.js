const express = require('express')
const user = require('../usecases/user')
const router = express.Router()

router.get('/', async(req, res) => {
    try {
        const allUsers = await user.getAll()
        res.json({
            success: true,
            message: 'All Users',
            data: {
                users: allUsers
            }
        })

    } catch (error) {
        res.json({
            sucess: false,
            message: 'Something went wrong',
            error: error.message

        })
    }
})

router.get('/:id', async(req, res) => {
    try {
        const { id } = req.params
        const userFound = await user.getById(id)
        res.json({
            success: true,
            message: 'User found',
            data: {
                user: userFound
            }
        })

    } catch (error) {
        res.json({
            sucess: false,
            message: 'Something went wrong',
            error: error.message
        })
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const { id } = req.params
        const deletedUser = await user.deleteById(id)
        res.json({
            success: true,
            message: 'Deleted user',
            data: {
                user: deletedUser
            }
        })
    } catch (error) {
        res.json({
            sucess: false,
            message: 'Something went wrong',
            error: error.message
        })
    }
})

router.post('/', async(req, res) => {
    try {
        const data = req.body
        const createUser = await user.create(data)
        res.json({
            success: true,
            message: 'Created user',
            data: {
                user: createUser
            }
        })
    } catch (error) {
        res.json({
            sucess: false,
            message: 'Something went wrong',
            error: error.message
        })
    }
})

module.exports = router