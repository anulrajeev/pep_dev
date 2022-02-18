const fs = require("fs");
const path = require("path");
let utility = {
    media: ['mp4','mkv','mp3'],
    archives: ['zip','7z','rar','tar','gz','ar','iso','xz'],
    documents: ['docx','doc','pdf','xlsx','xls','odt','ods','odp','odg','odf','txt','ps','tex'],
    app: ['exe','dmg','pkg','deb']
}
function organizeFn(src) {
    console.log("Organizing your folder");
    if(src==undefined )
        src=process.cwd();
    
    let dest = checkDest(src);
    organizeHelper(src, dest);
}

function checkDest(src)
{
    let dest=path.join(src, "organizedFolder");
    if(fs.existsSync(dest)==false)
    {
        console.log("creating folder");
        fs.mkdirSync(dest);

    }
    return dest;
}
function checkFileOrFolder(path) {
    let isFile = fs.lstatSync(path).isFile();
    return isFile;
}


function getCategory(src)
{
    // let extension = path.extname(src);or
    let extension = src.split(".")[1];
    for(let key in utility)
    {
        let valueArr = utility[key];
        for(let i =0; i<valueArr.length;i++)
        {
            if(extension == valueArr[i])
                return key;

        }
    }
    return "others"; // if path doesn't fall under any category
}

function organizeHelper(src, dest)
{
    console.log("organizing");
    let isFile = checkFileOrFolder(src);
    if (isFile == true) {  // Base case
        
        let category = getCategory(src);
        console.log(path.basename(src), " => ", category);
    } else { 
        let childrens = fs.readdirSync(src); 
        console.log(src);
        for (let i = 0;i < childrens.length;i++) {
            let child = childrens[i]; 
            let childPath = path.join(src, child);
            organizeHelper(childPath, dest);
            
        }
    }
}

module.exports = {
    organize: organizeFn
}