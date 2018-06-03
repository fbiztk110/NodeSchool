// Challenge 10 Time Server
// I use strftime(fmt, date), you could also use data.getFullYear(), date.getmonth(), date.getDate(), date
var port = process.argv[2];
var net = require('net');
var strftime = require('strftime');
var server = net.createServer((socket) => {
    var time = strftime('%F %H:%M', new Date()) + '\n';
    socket.write(time);
    socket.end();
});
server.listen(port);