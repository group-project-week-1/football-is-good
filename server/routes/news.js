const router = require('express').Router()
const NewsController = require('../controllers/news')

router.get('/google-news/:title', NewsController.getNews)
router.get('/top-headlines/:country', NewsController.getNewsCountry)
router.get('/sources/:language/:country', NewsController.getSources)
router.get('/google-news/:keyword', NewsController.findByKeyword)
router.get('/top-headlines/:keyword', NewsController.findKeywordWithTopHeadlines)
router.get('/top-headlines/:country/:category', NewsController.getNewsCountryCategory)

module.exports = router