const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end( 'Welcome to our HomePage')
        return;
    }
    if(req.url === '/about'){
        res.end( 'Welcome to our About Page, Happy to have you here')
        return;
    }
    if(req.url === '/contact'){
        res.end( 'Welcome to our Contact Page, Happy to have you here')
        return;
    }

    res.end(`
    <h2>Oops</h2>
    <p>Can't seems to find the page you are requesting</p>

    <a href="/back">Back Home</a>
      `)
   
})

server.listen(5000)
