// Challenge 5 Filtered LS

var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var extName = '.' + process.argv[3];


fs.readdir(dir,(err, files)=>{
    if(err){
        return console.log(err);
    }
    files.forEach((file)=>{
        if(path.extname(file) === extName){
            console.log(file);
        }
    });
});