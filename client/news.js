let annotate = null
let category = null
let country = null
let baseURL = 'http://localhost:4444'
function getNews(){
    console.log('masukkkk getnews')
    console.log(`http://localhost:4444/google-news/${annotate}&pageSize=5`)
    $.ajax({
        url:`http://localhost:4444/google-news/${annotate}&pageSize=5`,
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
                $('#news').append(`<div class="card" style="width: 18rem; display:block;">
                <img class="card-img-top" src="${news.urlToImage}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-text" style="color:black">${news.title}</h5>
                <a href="${news.url}" class="btn btn-primary">Go somewhere</a>
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

// function getNewsByCountry() {
//     console.log('masukkkk countryyyyyyy')
//     console.log(`http://localhost:4444/top-headlines/${country}/${category}&pageSize=5`)
//     $.ajax({
//         url:`http://localhost:4444/top-headlines/${country}/${category}&pageSize=5`,
//         method:'GET'
//     })
//     .done(response => {
//         console.log('masukk doneeeeeeeeeeee')
//         console.log(response)
//         $('#newsCountry').html('')
//         if(response.length == 0){
//             $('#newsCountry').html(`<h2 style="color:black">News not found<h2>`)
//         }
//         else{
//             for(let news of response){
//                 $('#newsCountry').append(`<div class="card" style="width: 18rem; display:block;">
//                 <img class="card-img-top" src="${news.urlToImage}" alt="Card image cap">
//                 <div class="card-body">
//                 <h5 class="card-text" style="color:black">${news.title}</h5>
//                 <a href="${news.url}" class="btn btn-primary">Go somewhere</a>
//                 </div>
//             </div>`)
//             }
//         }
//     })
//     .fail(function(jqXHR, textStatus) {
//         // console.log('masuk sini')
//         console.log(jqXHR)
//         console.log('request fail', textStatus)
//     })
// }


$(document).ready(function() {
    console.log('MASUK')
    getNews()
    // getNewsByCountry()
})