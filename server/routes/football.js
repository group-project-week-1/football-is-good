const express = require('express')
const router = express.Router()
const FootballController = require("../controllers/footballcontroller")


router.get('/teams', FootballController.getList)
router.post('/teams', FootballController.getTeam)



module.exports = router