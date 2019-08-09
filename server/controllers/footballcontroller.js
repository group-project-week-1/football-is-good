const axios = require('axios')
const base_url = "https://api.football-data.org/v2"

class FootballController {

    static getList (req, res, next) {
        axios({
            method: 'GET',
            url: `${base_url}/competitions/PL/teams`,
            headers: {
                "X-Auth-Token": process.env.TOKEN_FOOTBALL
            }
        })
        .then(({data}) => {
            const arrayOfTeams = data.teams.map((el) => { 
                return {
                    id: el.id,
                    name: el.name,
                    tag: el.tla,
                    venue: el.venue,
                    website: el.website,
                    img: el.crestUrl
                }
            })
            res.status(200).json(arrayOfTeams)
        })
        .catch(err => {
            console.log(err)
        })
    }

    static getProfile(req, res, next) {
        const teamId = req.params.teamId;
        axios({
            method: 'GET',
            url: `${base_url}/teams/${teamId}`,
            headers: {
                "X-Auth-Token": process.env.TOKEN_FOOTBALL
            }
        })
        .then(({ data }) => {
            let obj = {
                teamName: data.name,
                img: data.crestUrl,
                website: data.website
            }
            const arrayOfSquad = data.squad.map((el) => {
                return {
                    name: el.name,
                    position: el.position,
                    nationality: el.nationality
                }
            })
            res.status(200).json(
                // squad: arrayOfSquad,
                // team: obj
                arrayOfSquad
            )
        })
        .catch(err => {
            res.status(404),json({
                message: err
            })
        })
    }

    static highligth(req, res, next){
        axios({
            method: 'get',
            url: 'https://www.scorebat.com/video-api/v1/'
        })
        .then(({data}) => {
            res.json(data)
        })
        .catch(err => console.log(err))
    }
}

module.exports = FootballController