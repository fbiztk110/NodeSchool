// Challenge 6 Make It Modular

var filterFunction = require('./Challenge6_Modular-Filter.js');
var dir = process.argv[2];
var filter = process.argv[3];

filterFunction(dir, filter, (err, list) =>{
    if(err){
        console.log(err);
    }
    list.forEach((file)=>{
        console.log(file);
    });
});