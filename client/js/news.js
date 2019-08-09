let annotate = null
let category = null
let country = null
let baseURL = 'http://localhost:3000'

function getNews(){
    console.log('masukkkk getnews')
    // console.log(`http://localhost:3000/news/google-news/arsenal/en&pageSize=5`)
    $.ajax({
        url:`http://localhost:3000/news/google-news/arsenal/en&pageSize=5`,
        method:'GET'
    })
    .done(response => {
        console.log('masukk doneeeeeeeeeeee news')
        // console.log(response)
        $('#news').html('')
        if(response.length == 0){
            $('#news').html(`<h1 style="color:black">News not found<h1>`)
        }
        else{
            for(let news of response){

                console.log(news)
                $('#news').append(`<div class="card" style="width: 18rem; height: auto display:flex;">
                <img class="card-img-top" style="width: 300px; height: 300px" src="${news.urlToImage}" alt="Card image cap">
                <div class="card-body" <style="display:flex; flex-direction:column">
                <h5 class="card-text" style="color:black">${news.title}</h5>
                <a href="${news.url}" class="btn btn-primary btn-sm btn-block">Read</a>
                </div>
            </div>`)
            }
        }
    })
    .fail(function(jqXHR, textStatus) {
        // console.log('masuk sini')
        console.log(jqXHR)
        console.log('request fail', textStatus)
    })
}

function getNewsByCountry() {
    console.log('masukkkk countryyyyyyy')
    console.log(`http://localhost:3000/news/top-headlines/us/sports&pageSize=5`)
    $.ajax({
        url:`http://localhost:3000/news/top-headlines/us/sports&pageSize=5`,
        method:'GET'
    })
    .done(response => {
        console.log('masukk doneeeeeeeeeeee')
        console.log(response)
        $('#newsCountry').html('')
        if(response.length == 0){
            $('#newsCountry').html(`<h2 style="color:black">News not found<h2>`)
        }
        else{
            for(let news of response){
                $('#newsCountry').append(`<div class="card" style="width: 18rem; height: auto display:flex;">
                <img class="card-img-top" style="width: 300px; height: 300px" src="${news.urlToImage}" alt="Card image cap">
                <div class="card-body" <style="display:flex; flex-direction:column">
                <h5 class="card-text" style="color:black">${news.title}</h5>
                <a href="${news.url}" class="btn btn-primary btn-sm btn-block">Read</a>
                </div>
            </div>`)
            }
        }
    })
    .fail(function(jqXHR, textStatus) {
        // console.log('masuk sini')
        console.log(jqXHR)
        console.log('request fail', textStatus)
    })
}

function getTopKeyword() {
    console.log('masukk toppppppppppppppppp')
    $.ajax({
        url:`http://localhost:3000/news/google-news/everton/en&pageSize=5`,
        method:'GET'
    })
    .done(response => {

        $('#keyword').html('')
        console.log('masih masuk sini gak yaaaa')
        if(response.length == 0){
            $('#keyword').html(`<h3 style="color:black">News not found<h3>`)
        }
        else{
            for(let news of response){
                console.log(news)
                $('#keyword').append(`<div class="card" style="width: 18rem; display:flex;">
                <img class="card-img-top" style="width: 300px; height: 300px" src="${news.urlToImage}" alt="Card image cap">
                <div class="card-body" <style="display:flex; flex-direction:column">
                <h5 class="card-text" style="color:black">${news.title}</h5>
                <a href="${news.url}" class="btn btn-primary btn-sm btn-block">Read</a>
                </div>
            </div>`)
            }
        }
    })
    .fail(function(jqXHR, textStatus) {
        console.log(jqXHR)
        console.log('request fail', textStatus)
    })
}



$(document).ready(function() {
    console.log('MASUK')
    getNews()

    console.log('pisah')
    getNewsByCountry()
    console.log('jangan pisahkan aku')
    getTopKeyword()
})