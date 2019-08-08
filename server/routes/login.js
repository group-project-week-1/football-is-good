const route = require('express').Router()
const ControllerUser = require('../controllers/user');

route.post('/google', ControllerUser.signin)

module.exports = route