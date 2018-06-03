// Challenge 2 Baby Steps

//console.log(process.log);
// We could got the first element of process.log is always node, second element is always the directory of this file, so we should start from third element

var res = 0;

for(var i = 2; i < process.argv.length; i++){
    res += Number(process.argv[i]);
}

console.log(res);
