const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const api = require('./server/routes/api')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/', api)

const port = 3007 //because why not
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})