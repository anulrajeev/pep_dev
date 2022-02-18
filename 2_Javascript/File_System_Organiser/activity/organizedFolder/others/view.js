let fs = require("fs");
let path = require("path");

function viewFn(src, mode) {
    console.log("Viewing your folder");
    if(mode=="flat")
       viewHelperFlat(src);
    else   
       viewHelperTree(src,"");
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
        console.log(src);
        for (let i = 0;i < childrens.length;i++) {
            let child = childrens[i]; // Not a complete path, just file or folder name
            let childPath = path.join(src, child);
            // console.log(src);

            // Faith ??
            viewHelperFlat(childPath);
            
        }
    }
}

function viewHelperTree(src, indent) {
    // Is it a file or folder
    let isFile = checkFileOrFolder(src);
    if (isFile == true) {  // Base case
        console.log(indent, path.basename(src), "*");
    } else { // Folder => Folder1, Files
        let childrens = fs.readdirSync(src); // Read content Immediate Level childrens
        console.log(indent, path.basename(src));
        for (let i = 0;i < childrens.length;i++) {
            let child = childrens[i]; // Not a complete path, just file or folder name
            let childPath = path.join(src, child);
            // console.log(src);

            // Faith ??
            viewHelperTree(childPath, indent+"\t");
            
        }
    }
}

module.exports = {
    view: viewFn
}