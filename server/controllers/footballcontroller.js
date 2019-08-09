const axios = require('axios')
const base_url = "https://api.football-data.org/v2"
class FootballController {

    static getList (req, res, next) {
        axios({
            method: 'GET',
            url: `${base_url}/competitions/PL/teams`,
            headers: {
                "X-Auth-Token": process.env.TOKEN
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
                "X-Auth-Token": process.env.TOKEN
            }
        })
        .then(({ data }) => {

            const arrayOfSquad = data.squad.map((el) => {
                return {
                    name: el.name,
                    position: el.position,
                    nationality: el.nationality
                }
            })
            res.status(200).json(arrayOfSquad)
        })
        .catch(err => {
            res.status(404),json({
                message: err
            })
        })
    }
}

module.exports = FootballController