const express = require('express')
const path = require('path');
const route = express.Router();
const UserController = require('../controllers/userController')



route.get('/', UserController.getAddPage);

route.get('/users', UserController.getUsers)

route.post('/add-user', UserController.postAddUser)

module.exports = route;
