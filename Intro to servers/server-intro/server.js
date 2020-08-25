const http = require('http')

const server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write('Hello, Im {your_name_here}')
    response.end();
})

const port = 3000
server.listen(port, function () {
    console.log(`Node server created at port ${port}`)
})
