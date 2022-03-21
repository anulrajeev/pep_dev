let request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

let link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";
request(link, cb);

function cb(err, res, body){
    if(err)
        console.log(err);
    else{
        const dom = new JSDOM(body);
        let scorecardLinks = dom.window.document.querySelectorAll('a[data-hover="Scorecard"]');
        for(let i=0;i<scorecardLinks.length;i++)
            {
                let linkofMatch = "https://www.espncricinfo.com/series/ipl-2021-1249214" + scorecardLinks[i].href;
                
                request(linkofMatch, cb2);
                
            }
    }
}

function cb2(err, res, body){
    if(err)
        console.log(err);
    else{
        const dom = new JSDOM(body);
    }
}