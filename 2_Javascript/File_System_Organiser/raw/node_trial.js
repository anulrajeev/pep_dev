// OS module

/*
let os = require("os");
console.log(os.arch());
console.log(os.platform());
console.log(os.networkInterfaces());
*/

// File module
/*
let fs=require("fs");

// read from a file
let content = fs.readFileSync("f1.txt");
console.log(content+"");

//write to a file
fs.writeFileSync("f2.txt", 'file f2.');

//append to a file
fs.appendFileSync("f2.txt", ' \nThis content has been appended.')

//create a new directory.
fs.mkdirSync("facts")

//delete a directory
fs.rmdirSync("facts")

*/


//Path module

const { readFileSync } = require("fs");
let path = require("path");
// console.log(__dirname);

//get contents from f0.txt inside the newFolder
//  let pathToFile = __dirname+"\\newFolder\\f0.txt";
//  let content = readFileSync(pathToFile);
//getting contents from a file in another location through this method is tedious. So we use path.join

let pathToFile = path.join(__dirname, "newFolder", "f0.txt");
let content = readFileSync(pathToFile)

console.log(content+"");
