// URL :  https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-punjab-kings-53rd-match-1254094/ball-by-ball-commentary

let request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

request('https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-punjab-kings-53rd-match-1254094/ball-by-ball-commentary', cb);

function cb(err, res, body){
    if(err)
        console.log(err);
    else
        {
            const dom = new JSDOM(body);
            let content = dom.window.document.querySelector(".match-comment-wrapper .match-comment-long-text > p");
            console.log(content.textContent);
        }
}