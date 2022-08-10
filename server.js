const http = require('http');

const server = http.createServer( (request, response) => {
    console.log(request.method);
    console.log(request.headers);
    console.log(request.url);

    response.writeHead(200, {"Content-Type": "text/html"})
    if(request.method === "GET" && request.url === '/post') {
        response.end('<h4>Hello, world!</h4>');
    }

    if(request.method === "POST" && request.url === '/') {
        response.end('<p>POST method</p>');
    }

});
server.listen(8000);

console.log('Server running at http://127.0.0.1.8000');