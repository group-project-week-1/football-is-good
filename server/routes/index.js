const route = require('express').Router()
const routeLogin = require('./login');

route.use('/login', routeLogin)

module.exports = route