const route = require('express').Router()
const routeLogin = require('./login');

route.use('/login', routeLogin)
route.use('/register', routeLogin)

module.exports = route