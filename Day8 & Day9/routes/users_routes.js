const { Router } = require('express')
const express = require('express')
const router = express.Router()
const UserRoutes = require('../controllers/user_controller')


// Get /people/users
// To gove all users
router.get('/users', UserRoutes.getUsers)

router.post('/user', UserRoutes.postUser)

router.get('/users/:name', UserRoutes.findUser)

router.delete('/users/:name',UserRoutes.deleteUser)

router.patch('/users/:name',UserRoutes.patchUser)


module.exports = router;