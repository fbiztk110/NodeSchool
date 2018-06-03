// Challenge 11 HTTP File Server

var port = process.argv[2];
var src = process.argv[3];
var http = require('http');
var fs = require('fs');

var server = http.createServer((request, response)=>{
    response.writeHead(200, {
        'Content-Type': 'text/plain', 
    });
    fs.createReadStream(src).pipe(response);
});
server.listen(port);