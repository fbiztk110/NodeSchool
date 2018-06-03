// Module filter js for Challenge 6

var fs = require('fs')
var path = require('path')

module.exports = function (dir, filter, callback) {
    fs.readdir(dir, (err, list) => {
        if (err) {
            return callback(err);
        }
        list = list.filter((file)=>{
            return path.extname(file) === '.' + filter;
        });
        callback(null, list);
    });
};