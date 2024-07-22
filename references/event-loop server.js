const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('request event')
    res.end('hello World!')
})

server.listen(5000, () =>{
    console.log('server running on http://127.0.0.1:5000')
})