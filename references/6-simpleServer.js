const http = require('http');

const server = http.createServer((req, res)=>{

    if (req.url === '/'){
        res.end('welcome to the home page!')
    }
    res.end(`
        <h1>OOps!</h2>
        <p> 404 error page cannot be found <a href = '/'>home</a></p>

        `)
})

server.listen(5000)