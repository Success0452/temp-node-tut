const http = require('http');

const server = http.createServer()

server.on('request', (req, res) => {
    res.end('Welcome Home')
    return;
})

server.listen(5000);