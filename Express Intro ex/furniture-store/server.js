//EX1

// const express = require("express")
// const path = require("path")
// const app = express()

// console.log(__dirname)
// app.get('/', function (request, response) {
//     console.log("Someone has come into the server. Brace yourselves.")
//     response.send(`someone is here`)
// })

// const port = 3002
// app.listen(port, function () {
//     console.log(`Running server on port ${port}`)
// })

//EX2

const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

// console.log(__dirname)
app.get('/priceCheck/:name', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    let furnitureName = request.params.name
    let obj = { price: null }
    for (let s of store) {
        if (s.name === furnitureName) {
             obj = {
                nameObj : { name: s.name },
                priceObj : { price: s.price }

            }
            // priceObj = { price: s.price }
        }
    }
    response.send(obj)
})
app.get('/buy/:name', function (request, response) {
    console.log("someone buy something")
    let buyItem = request.params.name
    // let inventoryCount 
    for (let i of store) {
        if (i.name === buyItem) {
            // inventoryCount = {name: i.name ,inventory : (i.inventory-1),price: i.price}
            i.inventory--
            response.send(`Congrats! You've just bought ${i.name} for ${i.price}. There are ${i.inventory} left in stock`)
        }
    }
    response.end()
})

app.get('/sale', function (request, response) {
    let params = request.query
    if (params.admin === 'true') {
        for (let a of store) {
            if (a.inventory > 10) {
                price =a.price/2
                a.price = price
                console.log(price)
            }
        }
    }
    console.log(store)
    response.send(store)
})


const port = 3002
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})