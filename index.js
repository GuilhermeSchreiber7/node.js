const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    
    if(url === '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('initial page');
    } else if(url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('page about simple server');
    } else if(url === '/api') {
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify({name: 'Guilherme', linguage: 'JS'}));
    } else {
        res.writeHead(404, {'content-type': 'text/plain'});
        res.end('page not found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
    console.log('To stop the server, press Ctrl + C');
})

