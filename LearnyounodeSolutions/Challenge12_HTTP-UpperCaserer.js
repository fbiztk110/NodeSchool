// Challenge 12 HTTP UpperCaserer

var port = process.argv[2];
var http = require('http');
var map = require('through2-map');

var server = http.createServer((request, response) => {
    if(request.method !== 'POST'){
        return response.end('Send me a POST\n');
    }
    request.pipe(map((chunk)=>{
        return chunk.toString().toUpperCase();
    })).pipe(response);
});
server.listen(port);