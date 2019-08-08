const base_url = "http://localhost:8000"



$(document).ready(() => {
    getTeam()
})


function getTeam () {
    axios({
        method: 'get',
        url: `${base_url}/football/teams`
    })
    .then(({data}) => {
        console.log(data)
        data.forEach((el) => {
            $('.list').append(`
                <tr>
                    <td>${el.id}</td>
                    <td><button type="button" class="btn" value="${el.id}">${el.name}</button></td>
                    <td>${el.tag}</td>
                </tr>
            `)
        })
    })
    .catch(err => {
        console.log(err)
    })
}

function getProfile() {
    
}