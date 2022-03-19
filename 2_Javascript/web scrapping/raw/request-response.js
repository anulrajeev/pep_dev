const request = require("request")
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
request("https://www.google.co.in/", cb);
function cb(err, res, body)
{
    if(err)
       console.log("Some error  :  \n", err);
    else
    {
        const dom = new JSDOM(body);
        console.log(dom.window.document.querySelector(".NKcBbd").textContent); 
        // console.log(body);
    }
}
