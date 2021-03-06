const express = require('express')
const router = express.Router()
const FootballController = require("../controllers/footballcontroller")


router.get('/teams', FootballController.getList)
router.get('/teams/:teamId', FootballController.getProfile)



module.exports = router