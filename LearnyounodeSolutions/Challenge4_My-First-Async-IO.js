// Challenge 4 My First Async I/O

var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, (err, fileContents) => {
    // You could also use fs.readFile(file, 'utf8', callback)
    if (err) {
        return console.log(err);
    }
    var lines = fileContents.toString().split('\n').length - 1;
    
    console.log(lines);
});
