const express = require('express')
const router = express.Router()
const footballRouter = require("./football")

router.use('/football', footballRouter)

module.exports = router