const moment = require('moment')

// let formattedTimeNow = moment().format("MMMM Do, YYYY")
// console.log(formattedTimeNow) //January 3rd, 2017


// let timeNow = new Date()
// console.log(timeNow)

const urllib = require('urllib')

// urllib.request('http://data.nba.net/10s/prod/v1/2016/players.json', function(err, response){
//     console.log(response.toString())
// })

urllib.request('http://www.omdbapi.com/?apikey=52358cd3&t=The Lion King', function(err, response){
response= JSON.parse(response.toString())  
console.log(response.Released)
})


