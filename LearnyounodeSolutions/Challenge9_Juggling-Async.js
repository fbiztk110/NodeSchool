// Challenge 9 Juggling Async

var http = require('http');
var bl = require('bl');
var result = [];
var count = 0;

function print(){
    result.forEach((data)=>{
        console.log(data);
    });
}

function httpGet(index){
    http.get(process.argv[2+ index], (res)=>{
        res.pipe(bl((err, data)=>{
            if(err){
                return console.error(err);
            }
            result[index] = data.toString();
            count++;
            if(count === 3){
                print();
            }
        }));
    });
}

for(var i = 0; i < 3; i++){
    httpGet(i);
}