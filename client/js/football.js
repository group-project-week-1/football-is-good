const base_url = "http://localhost:8000"



$(document).ready(() => {
    getTeam()
})

$(".btn").click(function (){
    getProfile()
})

function getTeam () {
    axios({
        method: 'get',
        url: `${base_url}/football/teams`
    })
    .then(({data}) => {
        data.forEach((el) => {
            $('#main').append(`
            <div class="card" style="width: 15rem;">
            <img class="card-img-top" src="${el.img}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${el.name}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Venue: ${el.venue}</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            <div class="card-body">
            <form class="id">
                <button class="btn" type="submit" value="${el.id}">ID</button>
            </form>
            </div>
          </div>
            `)
        })

    })
    .catch(err => {
        console.log(err)
    })
}

function getProfile() {
    $()
        // axios({
        //     method: "get",
        //     url: `${base_url}/football/teams/${a}`
        // })
        // .then(({ data }) => {
        //     data.forEach((el) => {
        //         $(".profile").append(`
        //         <tr>
        //         <td>${el.name}</td>
        //         <td>${el.position}</td>
        //         <td>${el.nationality}</td>
        //     </tr>
        //         `)
        //     })
        // })
        // .catch(err => {
        //     console.log(err)
        // })
}