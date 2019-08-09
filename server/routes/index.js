const route = require('express').Router()
const routeLogin = require('./login');
const routeFootball = require('./football')
route.use('/login', routeLogin)
route.use('/register', routeLogin)
route.use('/football', routeFootball)
module.exports = route
