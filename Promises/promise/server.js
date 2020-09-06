const express = require("express")
const path = require("path")
const bodyParser = require('body-parser')
const api = require('./server/routes/api')
const app = express()
app.use('/', api)

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.listen(3008, function () {
    console.log("Server running on 3000")
})