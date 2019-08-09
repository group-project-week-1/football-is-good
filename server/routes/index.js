const route = require('express').Router()
const routeLogin = require('./login');
const routeFootball = require('./football')
const routeNews = require('./news')
route.use('/login', routeLogin)
route.use('/register', routeLogin)
route.use('/football', routeFootball)
route.use('/news', routeNews)
module.exports = route
