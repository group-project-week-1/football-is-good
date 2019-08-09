const axios = require('axios')
const ax = axios.create({
    baseURL: 'https://newsapi.org/v2'
})

class newsController {
    static getNews(req, res, next){
        ax
        .get(`/everything?q=${req.params.title}&sortBy=publishedAt&apiKey=${process.env.API_KEY}`, {headers : { Authorization : process.env.API_KEY} })
        .then(({data}) => {
            res.status(200).json(data.articles)
        })
        .catch(err => {
            // console.log('masuk sini tah')
            console.log(err.response,'response')
            // next(err)
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
        ax
        .get(`/top-headlines?country=${req.params.country}&category=${req.params.category}&apiKey=${process.env.API_KEY}`)
        .then(({data}) => {
            res.status(200).json(data.articles)
        })
        .catch(err => {
            console.log(err.response,'response')
            // next(err)
        })
    }

    static getSources(req, res, next) {
        ax
        .get(`/sources?language=${req.params.language}&country=${req.params.country}&apiKey=${process.env.API_KEY}`)
        .then(({data}) => {
            res.status(200).json(data.articles)
        })
        .catch(err => {
            console.log(err.response,'response')
            // next(err)
        })
    }

    static findByKeyword(req, res, next) {
        const keyWord = req.params.keyWord
        console.log(keyWord)
        const regex = new RegExp(`${keyWord}`, 'i')
        // const taskRegex = new RegExp(req.params.name, 'i')
        
        ax.get(`/everything?q=${keyWord}&sortBy=publishedAt&apiKey=${process.env.API_KEY}`, {headers : { Authorization : process.env.API_KEY}} )
        .then(({data}) => {
            // console.log({data})
            console.log(data.articles)
            const match = data.articles.filter((el) => el.description.match(regex))
            res.status(200).json(match)
        })
        .catch(err => {
            console.log(err.response,'response')
            // next(err)
        })
    }

    static findKeywordWithTopHeadlines(req, res, next) {
        const keyWord = req.params.keyWord
        const regex = new RegExp(`${keyWord}`, 'i')
        console.log(keyWord)
        ax.get(`/top-headlines?q=${keyWord}&apiKey=${process.env.API_KEY}`, {headers : { Authorization : process.env.API_KEY}} )
        .then(({data}) => {
            console.log({data})
            console.log(data.articles)
            const match = data.articles.filter((el) => el.description.match(regex))
            res.status(200).json(match)
        })
        .catch(err => {
            console.log(err.response,'response')
            // next(err)
        })
    }


    // static getNews(req, res) {
    //     ax.get('/latest-news', {headers : {Authorization : process.env.API_KEY}})
    //     .then((response) => {
    //         let data = response.data
    //         console.log(data)
    //         res.status(200).json(data)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //         res.status(500).json(err)
    //     })
    // }

    // static searchNewsLanguage(req, res) {
    //     ax.get('/search/language', {headers : {Authorization : process.env.API_KEY}})
    //     .then((response) => {
    //         let data = response.data
    //         console.log(data)
    //         res.status(200).json(data)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //         res.status(500).json(err)
    //     })
    // }

}

module.exports = newsController