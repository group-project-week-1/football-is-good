const route = require('express').Router()
const ControllerUser = require('../controllers/user');

route.post('/signup', ControllerUser.signin)
route.post('/google', ControllerUser.signin)

module.exports = route