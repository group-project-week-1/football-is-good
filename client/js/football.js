const base_url = "http://localhost:3000"

$(document).ready(() => {
    getTeam()
})

let team = null

function getTeam() {
    axios({
            method: 'get',
            url: `${base_url}/football/teams`
        })
        .then(({
            data
        }) => {
            team = data
            for (let i = 0; i < data.length; i++) {
                $('#team-list').append(`
                <div class="col-3" style="margin: 10px auto">
                    <div class="d-flex justify-content-center">
                        <div class="card" style="width: 15rem ;">
                            <a href="${data[i].website}">
                                <div class="kalim"> 
                                <form>    
                                <input id="getProfile" type="hidden" value="${data[i].id}">
                                </form>
                                    <img src="${data[i].img}" class="card-img-top" alt="FOTO">
                                </div>
                            </a>
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">${data[i].name}</li>
                                    <li class="list-group-item">${data[i].venue}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `)
            }
        })
        .catch(err => {
            console.log(err)
        })
}

function highlight(){
    axios({
        method: 'get',
        url: `${base_url}/football/highligth`
    })
    .then(({data}) => {
        for( let i=0;i< data.length;i++){
            $('#high').append(`
                <div class="col-4" style="margin: 10px auto">
                    <div class="d-flex justify-content-center">
                        <div class="card" style="width: 15rem ;">
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item" id="image-thum"><img src="${data[i].thumbnail}" alt=""></li>
                                    <a href="${data[i].url}"> <li class="list-group-item">${data[i].title}</li> </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `)
        }
    })
    .catch(err => console.log(err))
}

