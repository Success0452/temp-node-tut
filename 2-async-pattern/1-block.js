const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end( 'Welcome to our HomePage')
        return;
    }
    if(req.url === '/about'){
         //Blocking Code
        for(let i = 0; i < 1000; i++){
            for(let j = 0; j < 1000; j++){
                console.log(`${i} ${j}`);
            }
        }
        res.end( 'Welcome to our About Page, Happy to have you here')
        return;
    }

    res.end('end')
    return;
   
})

server.listen(5000)
