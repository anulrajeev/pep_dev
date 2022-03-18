const fs = require('fs')
  
console.log("Before");

fs.readFile('./f1.txt', cb);
function cb(err, data){
    if(err)
        return;
    else
        console.log(data +"");
}

console.log("After");