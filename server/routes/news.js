const router = require('express').Router()
const NewsController = require('../controllers/news')

router.get('/google-news/:title/:language', NewsController.getNews)
router.get('/top-headlines/:country', NewsController.getNewsCountry)
router.get('/google-news/:keyword/:language', NewsController.findByKeyword)
router.get('/top-headlines/:keyword', NewsController.findKeywordWithTopHeadlines)
router.get('/top-headlines/:country/:category', NewsController.getNewsCountryCategory)

module.exports = router