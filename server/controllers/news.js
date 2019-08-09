const axios = require('axios')
const ax = axios.create({
    baseURL: 'https://newsapi.org/v2'
})

class newsController {
    static getNews(req, res, next){
        ax
        .get(`/everything?q=${req.params.title}&language=${req.params.language}&sortBy=publishedAt&apiKey=${process.env.API_KEY}`, {headers : { Authorization : process.env.API_KEY} })
        .then(({data}) => {
            res.status(200).json(data.articles)
        })
        .catch(err => {
            console.log(err.response,'response')
            next(err)
        })
    }

    static getNewsCountry(req, res, next) {
        ax
        .get(`/top-headlines?country=${req.params.country}&apiKey=${process.env.API_KEY}`)
        .then(({data}) => {
            res.status(200).json(data.articles)
        })
        .catch(err => {
            console.log(err.response,'response')

        })
    }


    static getNewsCountryCategory(req, res, next) {
        console.log('masuk siniiii')
        ax
        .get(`/top-headlines?country=${req.params.country}&category=${req.params.category}&apiKey=${process.env.API_KEY}`)
        .then(({data}) => {
            res.status(200).json(data.articles)
        })
        .catch(err => {
            console.log(err.response,'response')
            next(err)
        })
    }

    static findByKeyword(req, res, next) {
        const keyWord = req.params.keyWord
        const regex = new RegExp(`${keyWord}`, 'i')



        ax.get(`/everything?q=${keyWord}&language=${req.params.language}&sortBy=publishedAt&apiKey=${process.env.API_KEY}`, {headers : { Authorization : process.env.API_KEY}} )

        .then(({data}) => {
            console.log(data.articles)
            const match = data.articles.filter((el) => el.title.match(regex))
            // console.log('iniiiiiii matchhhhhhhhhhhhhhhhhh',match)
            res.status(200).json(match)
        })
        .catch(err => {
            console.log(err.response,'response')
            next(err)
        })
    }

}

module.exports = newsController