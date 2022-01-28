let fs = require("fs");
let path = require("path");

function viewFn(src, mode) {
    console.log("Viewing your folder");
    viewHelperFlat(src);
}

function checkFileOrFolder(path) {
    let isFile = fs.lstatSync(path).isFile();
    return isFile;
}

function viewHelperFlat(src) {
    // Is it a file or folder
    let isFile = checkFileOrFolder(src);
    if (isFile == true) {  // Base case
        console.log(src, "*");
    } else { // Folder => Folder1, Files
        let childrens = fs.readdirSync(src); // Read content Immediate Level childrens
        
        for (let i = 0;i < childrens.length;i++) {
            let child = childrens[i]; // Not a complete path, just file or folder name
            let childPath = path.join(src, child);
            console.log(childPath);

            // Faith ??
            
        }
    }
}

module.exports = {
    view: viewFn
}